<?php
// Page Controller

loadFile('controllers/Controller.php');

class PageController extends Controller
{
	public $thisclass = "PageController";
	private $cfg;
	private $page;
	private $screen;
	private $action;
	private $subaction;

	private function page_exec($idiom, $screen, $action, $subaction)
	{
		global $clq;
		$this->cfg = $clq->get('cfg');
		$clq->set('idiom', $idiom);
		$clq->set('client', F::parseClient());	
		$clq->set('lcd', $idiom);
		Z::zset('Langcd', $idiom);
		$this->screen = $screen;
		$this->action = $action;
		$this->subaction = $subaction;
		$cms = $clq->resolve('Cms');
		$rq = $this->inputs();
		$extn = $this->cfg['site']['extension'];

		$token = array();
		if(!array_key_exists('UserName', $_SESSION)) {
			$_SESSION['UserName'] = "cliqonguest";
		}; $token['id'] = $_SESSION['UserName'];
		
		// Load Template Engine 
		$tpl = new Engine(new FilesystemLoader($clq->get('basedir')."views"), $clq->get('basedir')."cache/".$idiom);		
		$template = $this->screen.'.'.$extn;
		$vars = [
			'protocol' => $clq->get('protocol'),
			'rootpath' => $clq->get('rootpath'),
			'basedir' => $clq->get('basedir'),
			'viewpath' => $clq->get('rootpath').'views/',
			'includepath' => $clq->get('rootpath').'includes/',
			'action' => $this->action,
			'subaction' => $this->subaction,
			'screen' => $this->screen,
			'cmscontent' => $cms->content($idiom, $this->screen, $this->action, $this->subaction, $rq),
			'cfg' => $this->cfg,
			'languageoptions' => $cms->idiomOptions($idiom),
			'idiom' => $idiom,
			'jwt' => F::encode($token, $this->cfg['site']['secret']),
			'scripts' => $clq->get('js'),
			'rq' => $rq
		];	
		
		echo $tpl->render($template, $vars);
		// or
		// $tpl->publishtpl($screen, $vars);			
	}

	protected function api_exec($idiom, $action, $table, $tabletype)
	{
		try {
			
			global $clq; 
			$cms = $clq->resolve('Cms');
			$lcd = $clq->set('idiom', $idiom);
			$clq->set('lcd', $idiom);
			$this->cfg = $clq->get('cfg');
			$rq = $this->inputs();
			$extn = $this->cfg['site']['extension'];

			// Introduce JWT security here
			$token = F::decode($rq['token'], $this->cfg['site']['secret'], false);
			if($token['id'] == "") {
				throw new Exception("Not a valid token!");
			} else if($token['id'] !== $_SESSION['UserName']) {
				throw new Exception("Not a valid user!");
			}; 

			method_exists($cms, $action) ? $method = $action : $method = "cmsdefault";
			$vars = [
				'idiom' => $idiom,
				'table' => $table,
				'tabletype' => $tabletype,
				'rq' => $rq,
			];
			$result = $cms->$method($vars);

			// Development
			$msg = [
				'method' => $method,
				'table' => $table,
				'tabletype' => $tabletype,
				'idiom' => $idiom,
				'request' => $this->inputs()
			];
			// L::log($msg);

			if($result['callBack'] != "") {
				F::echoJsonp($result['content'], $result['callBack']);
			} else {
				F::echoJson($result['content']);
			}	

		} catch (Exception $e) {
			
			$err = [
				'flag' => 'NotOk',
				'errmsg' => $e->getMessage(),
				'action' => $action,
				'table' => $table,
				'tabletype' => $tabletype,
				'idiom' => $idiom,
				'request' => $this->inputs()
			];
			L::cLog($err);
			F::echoJson($err);
		}		
	}

	function get($idiom, $screen, $action = "", $subaction = "") {
		return $this->page_exec($idiom, $screen, $action, $subaction);
	}
	function get_xhr($idiom, $screen, $action = "", $subaction = "") {
		global $clq; $clq->set('model', 'clean');
		return $this->api_exec($idiom, $screen, $action, $subaction);
	}
	// Not exist
	function post() {}
	function post_xhr() {}

}
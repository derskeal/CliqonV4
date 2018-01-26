@include('partials/admheader.tpl')
</head>

<!-- BODY options, add following classes to body to change options

// Header options
1. '.header-fixed'					- Fixed Header

// Sidebar options
1. '.sidebar-fixed'					- Fixed Sidebar
2. '.sidebar-hidden'				- Hidden Sidebar
3. '.sidebar-off-canvas'		- Off Canvas Sidebar
4. '.sidebar-minimized'			- Minimized Sidebar (Only icons)
5. '.sidebar-compact'			  - Compact Sidebar

// Aside options
1. '.aside-menu-fixed'			- Fixed Aside Menu
2. '.aside-menu-hidden'			- Hidden Aside Menu
3. '.aside-menu-off-canvas'	- Off Canvas Aside Menu

// Footer options
1. '.footer-fixed'						- Fixed footer

-->
</head>
<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden footer-fixed">

    @include('partials/admnav.tpl')

    <!-- Main content -->
    <main class="main" id="admincontent">
        @raw($admincontent)
    </main>

    @include('partials/admfooter.tpl')

@include('partials/admscript.tpl')
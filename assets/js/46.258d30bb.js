(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{842:function(t,e,r){"use strict";r.r(e);var s=r(112),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("center",[r("h1",[t._v("Bucket 接管")])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("假如在进行渗透时，发现目标的一个子域显示如下内容")]),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{width:"800",src:"/img/1650005828.png"}}),r("br")]),t._v(" "),r("p",[t._v("通过 cname 记录，可以判断出这是一个 Amazon 的 S3，而且页面显示 NoSuchBucket，说明这个 Bucket 可以接管的，同时 Bucket 的名称在页面中也告诉了我们，为 "),r("code",[t._v("test.teamssix.com")])]),t._v(" "),r("p",[t._v("那么我们就直接在 AWS 控制台里创建一个名称为 "),r("code",[t._v("test.teamssix.com")]),t._v(" 的 Bucket 就可以接管了")]),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{width:"800",src:"/img/1650005891.png"}}),r("br")]),t._v(" "),r("p",[t._v("创建完 Bucket 后，再次访问发现就显示 AccessDenied 了，说明该 Bucket 已经被我们接管了。")]),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{width:"800",src:"/img/1650005911.png"}}),r("br")]),t._v(" "),r("p",[t._v("将该 Bucket 设置为公开，并上传个文件试试")]),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{width:"1000",src:"/img/1650005931.png"}}),r("br")]),t._v(" "),r("p",[t._v("在该子域名下访问这个 test.txt 文件")]),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{width:"800",src:"/img/1650005950.png"}}),r("br")]),t._v(" "),r("p",[t._v("可以看到通过接管 Bucket 成功接管了这个子域名的权限")]),t._v(" "),r("Vssue")],1)}),[],!1,null,null,null);e.default=v.exports}}]);
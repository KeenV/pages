(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{387:function(t,r,s){"use strict";s.r(r);var v=s(42),e=Object(v.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"高斯模糊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高斯模糊"}},[t._v("#")]),t._v(" 高斯模糊")]),t._v(" "),s("p",[t._v("从数学的角度来看，图像的高斯模糊过程就是图像与正态分布做卷积。由于正态分布又叫作高斯分布，所以这项技术就叫作高斯模糊。")]),t._v(" "),s("p",[t._v("高斯模糊是一种图像模糊滤波器，它用正态分布计算图像中每个像素的变换。N维空间正态分布方程为")]),t._v(" "),s("p",[t._v("$$G(r) = {1\\over\\sqrt{2\\pi\\sigma^2}^N}e^{-r^2/(2\\sigma^2)}$$")]),t._v(" "),s("p",[t._v("在二维空间定义为")]),t._v(" "),s("p",[t._v("$$G(u,v) = {1\\over{2\\pi\\sigma^2}}e^{-(u^2 + v^2)/(2\\sigma^2)}$$")]),t._v(" "),s("p",[t._v("其中"),s("strong",[t._v("r是模糊半径")]),t._v("，σ是正态分布的标准偏差。在二维空间中，这个公式生成的曲面的等高线是从中心开始呈正态分布的同心圆。分布不为零的像素组成的卷积矩阵与原始图像做变换。**每个像素的值都是周围相邻像素值的加权平均。原始像素的值有最大的高斯分布值，所以有最大的权重，相邻像素随着距离原始像素越来越远，其权重也越来越小。**这样进行模糊处理比其它的均衡模糊滤波器更高地保留了边缘效果，参见尺度空间实现。")]),t._v(" "),s("p",[t._v("理论上来讲，图像中每点的分布都不为零，这也就是说每个像素的计算都需要包含整幅图像。在实际应用中，在计算高斯函数的离散近似时，在大概3σ距离之外的像素都可以看作不起作用，这些像素的计算也就可以忽略。通常，图像处理程序只需要计算的矩阵就可以保证相关像素影响。对于边界上的点，通常采用复制周围的点到另一面再进行加权平均运算。")])])}),[],!1,null,null,null);r.default=e.exports}}]);
/**
 * Created by Administrator on 2016/11/10.
 */
//想要操作谁 就先获取谁
var oTab=document.getElementById("tab");
var tHead=oTab.tHead;
var oThs=tHead.rows[0].cells;//
var tBody=oTab.tBodies[0];
var oRows=tBody.rows;
var data=null;
//1.首先获取后台（data.txt）中的数据“JSON”格式的字符串  Ajax(async javascript and xml)
//1)首先创建一个Ajax对象

var xhr=new XMLHttpRequest;
//2）打开我们需要请求数据的那个文件地址
xhr.open("get","./json/data.txt",true);
//3)兼听请求状态
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        var val=xhr.responseText;
        data=utils.jsonParse(val);
    }
}
//4)发送请求
xhr.send(null);

//2实现数据绑定
console.log(data)
document.getElementsByClassName()
    .polar-text-font-weight, body, .polar-search-form input, .polar_infobox .infobox-subtitle, .polar-recent-posts-list .post-title, .woocommerce.singular div.product .cart .variations .label label, .woocommerce ul.product_list_widget li .product-info .product-name, .woocommerce ul.product_list_widget li .product-info span.amount, .widget_recent_reviews ul.product_list_widget li > a, .woocommerce .widget_price_filter .price_label, .polar-mini-cart-container .total .label, .widget_shopping_cart_content .total .label, .woocommerce table.shop_table thead th, .woocommerce table.shop_table .product-name dl.variation dt, .woocommerce-cart .cart-collaterals .cart_totals table .cart-subtotal th, .woocommerce-cart .cart-collaterals .cart_totals table .shipping th, .woocommerce form.checkout label, .woocommerce form.checkout table.shop_table tfoot{
    font-family: "microsoft yahei";
}
.polar-heading-font, h1, h2, h3, h4, h5, h6, body div.pp_pic_holder .pp_description, body div.pp_pic_holder .pp_nav .currentTextHolder, .header-v6 .topbar .cart-icon .polar-cart-quantity, .header-v6 .logo-area .social-icons .text, .polar-vertical-menu ul.menu > .menu-item, .polar-vertical-menu ul.menu .sub-menu.level1 > .menu-item, .polar-post .post-link, .polar-post-single .post-meta-field .meta2-label, .polar-post-comments .comment-wrapper .comment-meta, .polar-isotope-filter .filter, .polar-portfolio-single-wrapper .portfolio-content .meta, .polar-portfolio-post-nav-links a, .crf-pagination, .search .search-contents .polar-post .post-type-mark .post-type, .polar-widget-tweets .polar-tweet-container .date, .polar-widget-tweets .view-all-tweets, .polar_button, input[type=submit], .polar_pricing_table.polar-style1 .price, .polar_pricing_table.polar-style2 .price, .polar_pricing_table.polar-style1 .pricing_button, .polar_pricing_table.polar-style2 .pricing_button, .polar_counterbox, .vc_tta.vc_tta-tabs .vc_tta-tab > a, .polar_progress_steps.polar-style-line-steps .step .ps-icon-number, .polar_progress_steps.polar-style-bg-hover-effect .ps-icon-number, .polar_progress_steps.polar-style-bg-hover-effect .ps-link-wrap, .polar_image_gallery .gallery-hover-link, .polar_countdown.polar-style1 .unit, .polar_countdown.polar-style2 .digit, .polar_countdown.polar-style4 .digit, .polar_countdown.polar-style5 .digit, .polar-recent-posts-list .post-meta .meta-bold, .polar-recent-posts-list .post-meta a, .polar-recent-posts-list .post-link, .polar-wc-control-bars, .woocommerce div.product .product-thumbnail .onsale, .woocommerce div.product .price .amount, .woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce.singular div.product .summary .stock-stat-container, .woocommerce.singular div.product .cart .variations .label, .woocommerce.singular div.product .product_meta .product-meta-row .label, .woocommerce.singular div.product .social-share .label, .woocommerce .polar-quantity-input .qty, .woocommerce div.product .woocommerce-tabs ul.tabs > li, .woocommerce #reviews #comments ol.commentlist li .comment-text p.meta, .woocommerce .woocommerce-message, .woocommerce .woocommerce-info, .woocommerce .woocommerce-error, .woocommerce ul.product_list_widget li .product-info .product-name, .woocommerce ul.product_list_widget li .product-info span.amount, .widget_recent_reviews ul.product_list_widget li > a, .polar-mini-cart-container .total, .widget_shopping_cart_content .total, .woocommerce table.shop_table thead, .woocommerce-cart .cart-collaterals .cart_totals table .cart-subtotal th, .woocommerce-cart .cart-collaterals .cart_totals table .shipping th, .woocommerce-cart .cart-collaterals .cart_totals table .order-total th, .woocommerce-cart .cart-collaterals .woocommerce-shipping-calculator .shipping-calculator-button, .woocommerce form.checkout label, .woocommerce form.checkout table.shop_table tfoot{
    font-family: "microsoft yahei";

}
@media screen and (max-width: 769px) {
#saasBtn h2.title{
        font-size:18px;
    }
#appBtn h2.title{
        font-size:18px;
    }
.copyright-text{
        padding: 0 60px 0 20px;
        display: inline-block;
        word-break: break-all;
    }
.totop{
        margin-right: 20px;
    }
}
.bottom-bar>.container{

}
.bottom-bar>.container>.totop{

}
.bottom-bar>.container>.copyright-text>a{
    display:inline-block;
    padding:0 5px;
}
.btnHover{
    border-bottom:4px solid #0083cd;
}
.btnNormal{
    border-bottom:2px solid #999999;
}
#appInfo,#appInfo1{
    display:none;
}
#saasBtn h2.title{
    color:#0083cd;
}
#saasBtn h4.subtitle{
    color:#0083cd;
}
#saasBtn:hover h2.title{
    color:#0083cd;
}
#saasBtn:hover h4.subtitle{
    color:#0083cd;
}
#appBtn:hover h2.title{
    color:#0083cd;
}
#appBtn:hover h4.subtitle{
    color:#0083cd;
}

var saasBtn= document.getElementById("saasBtn");
var appBtn=document.getElementById("appBtn");
var saasInfo=document.getElementById("saasInfo");
var appInfo=document.getElementById("appInfo");
var appInfo1=document.getElementById("appInfo1");
var saash2=saasBtn.getElementsByTagName("h2")[0];
var saash4=saasBtn.getElementsByTagName("h4")[0];
var apph2=appBtn.getElementsByTagName("h2")[0];
var apph4=appBtn.getElementsByTagName("h4")[0];
saasBtn.onmouseover=function(){

    saasBtn.style.borderBottom="4px solid #0083cd";
    saasInfo.style.display="block";
    saash2.style.color="#0083cd";
    saash4.style.color="#0083cd";
    appBtn.style.borderBottom="2px solid #999999";
    appInfo.style.display="none";
    appInfo1.style.display="none";
    apph2.style.color="#000000";
    apph4.style.color="#000000";
}


appBtn.onmouseover=function(){

    appBtn.style.borderBottom="4px solid #0083cd";
    apph2.style.color="#0083cd";
    apph4.style.color="#0083cd";
    appInfo.style.display="block";
    appInfo1.style.display="block";
    saasBtn.style.borderBottom="2px solid #999999";
    saasInfo.style.display="none";
    saash2.style.color="#000000";
    saash4.style.color="#000000";
}

if(window.innerWidth<768){
    saasBtn.style.width="50%";
    saasBtn.style.display="inline-block";
    appBtn.style.display="inline-block";

    appBtn.style.width="50%";
}
window.onresize=function(){
        if(window.innerWidth<768){
            saasBtn.style.width="50%";
            appBtn.style.width="50%";
            saasBtn.style.display="inline-block";
            appBtn.style.display="inline-block";
        }
    }

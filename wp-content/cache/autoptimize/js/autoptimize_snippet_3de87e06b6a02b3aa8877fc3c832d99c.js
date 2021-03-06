/*!
 * Print-O-Matic JavaScript v1.8.9
 * http://plugins.twinpictures.de/plugins/print-o-matic/
 *
 * Copyright 2019, Twinpictures
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, blend, trade,
 * bake, hack, scramble, difiburlate, digest and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
jQuery(document).ready(function(){jQuery('.printomatic, .printomatictext').click(function(){var id=jQuery(this).attr('id');var target=jQuery(this).data('print_target');if(!target){target=jQuery('#target-'+id).val();}
if(target=='%prev%'){target=jQuery(this).prev();}
if(target=='%next%'){target=jQuery(this).next();}
var w=window.open('','_blank');var print_html='<!DOCTYPE html><html><head><title>'+document.getElementsByTagName('title')[0].innerHTML+'</title>';if(typeof print_data!='undefined'&&typeof print_data[id]!='undefined'){if('pom_site_css'in print_data[id]&&print_data[id]['pom_site_css']){print_html+='<link rel="stylesheet" type="text/css" href="'+print_data[id]['pom_site_css']+'" />';}
if('pom_custom_css'in print_data[id]&&print_data[id]['pom_custom_css']){print_html+='<style>'+print_data[id]['pom_custom_css']+'</style>';}
w.document.open();w.document.write(print_html+'</head><body></body></html>');w.document.close();if('pom_do_not_print'in print_data[id]&&print_data[id]['pom_do_not_print']){jQuery(print_data[id]['pom_do_not_print']).hide();}
if('pom_html_top'in print_data[id]&&print_data[id]['pom_html_top']){jQuery(w.document.body).html(print_data[id]['pom_html_top']);}}
var ua=window.navigator.userAgent;var ie=true;if(ua.indexOf("MSIE ")!=-1){jQuery(w.document.body).append(jQuery(target).clone(true).html());}
else if(ua.indexOf("Trident/")!=-1){jQuery(w.document.body).append(jQuery(target).clone(true).html());}
else if(ua.indexOf("Edge/")!=-1){jQuery(target).each(function(){var s=jQuery.trim(jQuery(this).clone(true).html());jQuery(w.document.body).append("<div>"+s+"</div>");});}
else{jQuery(w.document.body).append(jQuery(target).clone(true));ie=false;}
if(typeof print_data!='undefined'&&typeof print_data[id]!='undefined'){if('pom_do_not_print'in print_data[id]){jQuery(print_data[id]['pom_do_not_print']).show();}
if('pom_html_bottom'in print_data[id]&&print_data[id]['pom_html_bottom']){jQuery(w.document.body).append(jQuery.trim(print_data[id]['pom_html_bottom']));}}
if(ie){jQuery(target).find('input[type=text]').each(function(){var user_val=jQuery(this).val();if(user_val){var elem_id=jQuery(this).attr('id');if(elem_id){w.document.getElementById(elem_id).value=user_val;}
else{var elem_name=jQuery(this).attr('name');if(elem_name.length){named_elements=w.document.getElementsByName(elem_name);named_elements[0].value=user_val;}}}});jQuery(target).find('select').each(function(i){console.log('found one: '+i);var sel_val=jQuery(this).val();console.log('value is: '+sel_val);if(sel_val){var elem_id=jQuery(this).attr('id');if(elem_id){w.document.getElementById(elem_id).value=sel_val;}}});}
iframe=jQuery(w.document).find('iframe');if(iframe.length&&typeof print_data!='undefined'&&typeof print_data[id]!='undefined'){if('pom_pause_time'in print_data[id]&&print_data[id]['pom_pause_time']<3000){print_data[id]['pom_pause_time']=3000;}
else if(print_data[id]['pom_pause_time']==='undefined'){print_data[id]['pom_pause_time']=3000;}}
if(typeof print_data!='undefined'&&typeof print_data[id]!='undefined'&&'pom_pause_time'in print_data[id]&&print_data[id]['pom_pause_time']>0){pause_time=setTimeout(printIt,print_data[id]['pom_pause_time']);}
else{printIt();}
function printIt(){w.focus();w.print();if('pom_close_after_print'in print_data[id]&&print_data[id]['pom_close_after_print']=='1'){setTimeout(function(){w.close()},1000);}}});});
jQuery(document).ready(function(e){e(".cd-tour-nav li:nth-child(2) a.inactive").text("Finish"),e(".cd-tour-nav li:nth-child(2) a.inactive").addClass("cd-close-2"),e("svg.icon").hover(function(t){e(".cd-tour-wrapper").hasClass("active")||e(e(".cd-tour-wrapper li.cd-single-step")[parseInt(e(t.currentTarget).parent().attr("data-helper"))]).addClass("is-selected")},function(){e(".cd-tour-wrapper").hasClass("active")||e(".cd-tour-wrapper li.cd-single-step").removeClass("is-selected")})}),$(function(){$('[data-toggle="tooltip"]').tooltip({html:"true"})}),$("#ex1").slider({formatter:function(e){return""+e}}),$("#ex2").slider({formatter:function(e){return""+e}}),$("#ex3").slider({formatter:function(e){return""+e}}),$("#ex4").slider({formatter:function(e){return""+e}}),$("#searchPanel").multiselect({columns:1,placeholder:"Search...",search:!0,selectAll:!0}),$(".tooltipup").tooltip({html:!0,width:1e3}),$("#modal-welcome-1").modal("show"),$(".btn-modal-2").click(function(){$("#modal-welcome-2").modal("show")}),$(".slider-item-1 .add-tag").click(function(){$(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass("highlight"),$(".collapse-1").slideToggle("slow"),$(".slider-head-1").toggleClass("active")}),$(".slider-item-2 .add-tag").click(function(){$(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass("highlight"),$(".collapse-2").slideToggle("slow"),$(".slider-head-2").toggleClass("active")}),$(".slider-item-3 .add-tag").click(function(){$(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass("highlight"),$(".collapse-3").slideToggle("slow"),$(".slider-head-3").toggleClass("active")}),$(".slider-item-4 .add-tag").click(function(){$(this).parent(".col-md-3").parent(".row").parent(".slider-item").toggleClass("highlight"),$(".collapse-4").slideToggle("slow"),$(".slider-head-4").toggleClass("active")}),$(".ms-options-wrap > .ms-options > ul label").css({"padding-left":"26px"}),$(".add-template").click(function(){$(".add-tag-body").slideToggle("slow"),$(this).toggleClass("active")}),$(function(){$(".check-all-group input[type=checkbox]").change(function(){$label=$(this).parent(".check-all-group"),$(this).is(":checked")?($label.removeClass("-multi"),$label.parent("li").find("ul:first input[type=checkbox]").each(function(){$(this).prop("checked","checked"),$label.removeClass("-multi")})):($label.removeClass("-multi"),$label.parent("li").find("ul:first input[type=checkbox]").each(function(){$(this).prop("checked",""),$label.removeClass("-multi")}))}),$(".checkbox-control input[type=checkbox]").change(function(){var e=$(this).parents("ul").attr("id"),t=$("#"+e).find("li input[type=checkbox]:checked").length,l=$("#"+e).find("li input[type=checkbox]:not(:checked)").length;0!=t&&0==l?$("#"+e).parent("li").find(".check-all-group input[type=checkbox]").prop("checked","checked").parent("label").removeClass("-multi"):0!=t&&0!=l?$("#"+e).parent("li").find(".check-all-group input[type=checkbox]").prop("checked","").parent("label").addClass("-multi"):$("#"+e).parent("li").find(".check-all-group input[type=checkbox]").prop("checked","").parent("label").removeClass("-multi")})}),$(".poi-block--toggle").on("click",function(){return $(this).toggleClass("-closed").blur(),$(this).parent("li").find(".poi-block--points-group:first").slideToggle(),!1});
/**
 * Created by luorongsheng on 2016/9/18.
 */
/*  公共的模块 */
/* 模态框 */
/* 创建一个模态框*/
function modal(title){
    var initData={
        "appendId":"modalRef",
        "modalId":"myModal",
        "title":title,
        "formId":"formEdit",
        "loadUrl":"null",
        "loadParas":{"ID":"id"},
    };
    /*var form="<form class='form-horizontal'><div class='form-group'><label class='control-label'>姓名</label><input type='text' class='form-control' placeholder='姓名'></div><div class='form-group'><label>地点</label><input type='text' class='form-control' placeholder='地点'></div></form>";*/
    /*
     whr.setModal(initData);*/
    var form="<form class='form-horizontal' role='form'><div class='form-group'><label for='firstname' class='col-sm-2 control-label'>名字</label><div class='col-sm-5'><input type='text' class='form-control' id='firstname' placeholder='请输入名字' value=''></div><div class='col-sm-5'><p style='color:red;font-size:8px'>填写正确的用户名</p></div></div><div class='form-group'><label for='lastname' class='col-sm-2 control-label'>性别</label><div class='col-sm-5'><input type='text' class='form-control' id='lastname' placeholder='请输入性别'></div></div><div class='form-group'><label for='firstname' class='col-sm-2 control-label'>出生年月</label><div class='col-sm-5'><input type='date' class='form-control' id='firstname' placeholder='请输入生日'></div></div><div class='form-group'><label for='lastname' class='col-sm-2 control-label'>邮箱</label><div class='col-sm-5'><input type='email' class='form-control' id='lastname' placeholder='请输入邮箱'></div></div><div class='form-group'><label for='firstname' class='col-sm-2 control-label'>工资</label><div class='col-sm-5'> <input type='number' class='form-control' id='firstname' placeholder='请输入工资'> </div> </div></form>";
    var modal="<div class='modal fade' id='mymodal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>x</button><h3 class='modal-title'>"+initData.title+"</h3></div><div class='modal-body'></div><div class='modal-footer'><button class='btn btn-success' >提交</button><button class='btn btn-success' data-dismiss='modal'>关闭</button></div></div></div></div>";
    if(	$("#modalRef")!=null){
        $("#modalRef").empty();
    }
    $("#modalRef").append(modal);
    $("#modalRef .modal-body").append(form);
    $("#mymodal").modal('show');
    if($("#modalRef")!=null){
        $('#mymodal').on('hidden.bs.modal',function(){
            $("#modalRef").empty();
        })
    }
}
/*   让模态框居中*/
function centerModals(){
    $('.modal').each(function(i){
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}
$("#add").on("click",function(){
    var title=$(this).text();
    modal(title);
    $('.modal').on('show.bs.modal', centerModals());
    $(window).on('resize', centerModals());
});
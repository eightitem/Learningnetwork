$(function(){
    var $login= {
        init:function(){
            this.change()
            this.wxlogin()
            this.typelogin()
            this.code()
            this.getcode()
            this.passlogin()
        },

        change:function(){
            $(".tab").click(function(){
                var i=$(this).attr('id')

                if(i==0){
                    $(".phone-login").removeClass("hide")
                    $(".password-login").addClass("hide")
                    $(".input-password-box").val('')

                }else{
                    $(".password-login").removeClass("hide")
                    $(".phone-login").addClass("hide")
                    // $('.getcode-btn').text('获取验证码')
                }

                $(this).find(".tab-text").addClass("isActive");
                $(this).find(".tab-line").removeClass("hide");
                $(this).siblings(".tab").find(".tab-text").removeClass("isActive");
                $(this).siblings(".tab").find(".tab-line").addClass("hide");
            })

        },
        wxlogin:function(){
            $(".wx-login-btn").click(function(){
                $(".login-type").addClass("hide")
                $(this).addClass("hide")
                $(".wx-login").removeClass("hide")
            })
        },
        typelogin:function(){
            $(".top").click(function(){
                $(".login-type").removeClass("hide")
                $(".wx-login-btn").removeClass("hide")
                $(".wx-login").addClass("hide")
            })
        },
        code:function(){
            $('.getcode-btn').click(function() {
                let count = 60;
                var countDown = setInterval(() => {
                    if (count === 0) {
                        $('.getcode-btn').text('重新发送').removeAttr('disabled');
                        //    $('.getcode-btn').css({
                        //     background: '#ff9400',
                        //     color: '#fff',
                        //    });
                        clearInterval(countDown);
                    } else {
                        $('.getcode-btn').attr('disabled', true);
                        //    $('.getcode-btn').css({
                        //     background: '#d8d8d8',
                        //     color: '#707070',
                        //    });
                        $('.getcode-btn').text(count + 's后重发');
                    }
                    count--;
                }, 1000);
            })

        },
        getcode:function(){
            $(".code-number").keyup(function() {
                var v=$(".code-number").val()

                if (v != ""&&v.length==6){
                    $(".login-button-content").addClass("allowed")
                }else{
                    $(".login-button-content").removeClass("allowed")
                }


            })
        },
        passlogin:function(){

            $(".input-account-box").keyup(function() {
                var count=$(".input-account-box").val()
                var pass=$(".input-password-box").val()
                if(count!=""&pass!=""){
                    $(".login-button-content2").addClass("allowed")
                }
            })
            $(".input-password-box").keyup(function() {
                var count=$(".input-account-box").val()
                var pass=$(".input-password-box").val()
                if(count!=""&pass!=""){
                    $(".login-button-content2").addClass("allowed")
                }
            })


        }

    }
    $login.init();
})
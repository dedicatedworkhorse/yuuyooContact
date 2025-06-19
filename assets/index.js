
        // optionally, set maximum number of captcha validation on event:
        const maxNumberOfTries = 5;

        // captcha initial setup
        var myCaptcha = new jCaptcha({
            el: '.jCaptcha',
            canvasClass: 'jCaptchaCanvas',
            canvasStyle: {
                // properties for captcha stylings
                width: 100,
                height: 15,
                textBaseline: 'top',
                font: '15px Arial',
                textAlign: 'left',
                fillStyle: '#ddd'
            },

            // set callback function
            callback: function (response, $captchaInputElement, numberOfTries) {

                if (maxNumberOfTries === numberOfTries) {
                    // maximum attempts reached, so do something
                    // e.g. disable the form:
                    document.querySelector('form').removeEventListener('submit', formSubmit);
                    $captchaInputElement.classList.add('disabled');
                    $captchaInputElement.placeholder = 'Maximum attempts reached!';
                    $captchaInputElement.setAttribute('disabled', 'true');
                    document.querySelector('button').setAttribute('disabled', 'true');

                    return;
                }

                if (response == 'success') {

                    $captchaInputElement.classList.remove('error');
                    $captchaInputElement.classList.add('success');
                    $captchaInputElement.placeholder = 'Submit successful!';

                    // now continue with form submit

                }

                if (response == 'error') {

                    $captchaInputElement.classList.remove('success');
                    $captchaInputElement.classList.add('error');
                    $captchaInputElement.placeholder = 'Please try again!';

                }

            }

        });

        function formSubmit(e) {

            e.preventDefault();

            // myCaptcha validate
            myCaptcha.validate();

        };

        // validate captcha on form submit event
        document.querySelector('form').addEventListener('submit', formSubmit);

        // popup setup
        document.querySelector('.codeBtn').addEventListener('click', function () {

            var jPopupDemo = new jPopup({

                content: '<strong>HTML</strong>\
                    <p>\
                        &lt;form class="form" action=""&gt;\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;input class="jCaptcha" type="text" placeholder="Type in result please"&gt;\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="submit">Submit&lt;/button&gt;\
                        <br>\
                        &lt;/form&gt;\
                    </p>\
                    <strong>JavaScript</strong>\
                    <p>\
                    <span>// optionally, set maximum number of captcha validation on event:</span>\
                    const maxNumberOfTries = 5;\
                    <br>\ <br>\
                    <span>// captcha initial setup</span>\
                    var myCaptcha = new jCaptcha({\
                    <br><br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;el: ".jCaptcha",\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;canvas: {\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class: "jCaptchaCanvas",\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style: {\
                        <br>\
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// properties for captcha stylings:</span>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 100,\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 15,\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textBaseline: "top",\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font: "15px Arial",\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textAlign: "left",\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fillStyle: "#ddd"\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;},\
                        <br>\
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;// set callback function</span>\
                        &nbsp;&nbsp;&nbsp;&nbsp;callback: function(response, $captchaInputElement, numberOfTries) {\
                        <br><br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (maxNumberOfTries === numberOfTries) {\
                            <br><br>\
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// maximum attempts reached, so do something</span>\
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// e.g. disable the form:</span>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.querySelector("form").removeEventListener("submit", formSubmit);\
                            <br>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement.classList.add("disabled");\
                            <br>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement.placeholder = "Maximum attempts reached!"";\
                            <br>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement.setAttribute("disabled", "true");\
                            <br>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.querySelector("button").setAttribute("disabled", "true");\
                            <br><br>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;\
                            <br>\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\
                        <br><br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (response == \'success\') {\
                        <br><br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement[0].classList.remove(\'error\');\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement[0].classList.add(\'success\');\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement[0].placeholder = \'Submit successful!\';\
                        <br><br>\
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// continue with form submit</span>\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\
                        <br><br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (response == \'error\') {\
                        <br><br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement[0].classList.remove(\'success\');\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement[0].classList.add(\'error\');\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$captchaInputElement[0].placeholder = \'Please try again!\';\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\
                    <br>\
                    &nbsp;&nbsp;&nbsp;&nbsp;}\
                    <br><br>\
                    });\
                    <br><br>\
                    <span>// validate captcha on form submit event</span>\
                    function formSubmit(e) {\
                        <br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();\
                        <br><br>\
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;// myCaptcha validate</span>\
                        &nbsp;&nbsp;&nbsp;&nbsp;myCaptcha.validate();\
                        <br>\
                    };\
                    <br>\<br>\
                    document.querySelector("form").addEventListener("submit", formSubmit);\
                    <br><br>\
                    </p>'

            });

        });


        let triggermenu = document.querySelector('#triggermenu');
        let mobilemenu = document.querySelector('#menu-mobile-container');
        let closemenu = document.querySelector('#menu-mobile-container .dark-part');

        triggermenu.addEventListener("click", function(){
            mobilemenu.classList.add("active");
        });
        closemenu.addEventListener("click", function(){
            mobilemenu.classList.remove("active");
        });

        $('.fehrest li').hide()
        $('.fehrest1').hide()
        $('.fehrest').click(function(){
            $('.fehrest li').toggle(1000)
            $('.fehrest1').toggle($('.fehrest1').toggle(),$('.fehrest2').toggle())
        });
        $('.darbare-ma li').hide()
        $('.darbare-ma1').hide()
        $('.darbare-ma').click(function(){
            $('.darbare-ma li').toggle(1000)
            $('.darbare-ma1').toggle($('.darbare-ma1').toggle(),$('.darbare-ma2').toggle())
        });
        let img2  = document.querySelector('img2');
        let img1 = document.querySelectorAll('.img1');
        let active = document.querySelector('.active');
        let n =0;

        $('.p1').hide()
        $('.fas1').hide()
        $('#btnToggle1').click(function(){
            $('.p1').toggle(1000)
            $('.fas').toggle($('.fas1').toggle(),$('.fas2').toggle())
        });
        function hide(){
            for (let index = 0; index < img1.length; index++) {
                const element = img1[index];
                element.style.display="none"
                
            }  
        }        
        function show(){    
            for (let index = 0; index < img1.length; index++) {
                const element = img1[index];
                element.classList.remove('active')
        
            }
        }
        setInterval(() => {
            n++;
            if(n>img1.length-1){
                n=0
            }
            hide();
            show();
            img1[n].style.display='block';
            img1[n].classList.add('active');
        }, 4000);
        const counters = document.querySelectorAll(".counter"); 
        counters.forEach((counter) => {
            counter.innerText = "0";

            const updateCountent = () => {
                const target = +counter.getAttribute("data-target");
                const c = +counter.innerText;
                const increment = target / 1000;

                if(c < target){
                    counter.innerText = `${Math.ceil(c + increment)}`
                    setTimeout(updateCountent, 1) 
                }else{
                    counter.innerText = target;
                }
            };
            updateCountent();
        });
        let remainingtime = 70000;

        function setTime(){
            if(remainingtime == 0) return;
            let h = Math.floor(remainingtime / 3600);
            let m = Math.floor((remainingtime % 3600)/60);
            let s = ((remainingtime % 3600)%60);
            document.querySelector('#hours').innerHTML = h;
            document.querySelector('#minutes').innerHTML = m;
            document.querySelector('#secounds').innerHTML = s;
        };

        setInterval( ()=>{
            remainingtime -= 1;
            setTime();
        },1000)

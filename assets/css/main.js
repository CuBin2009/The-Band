
        const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modalContainer')
        /* Hàm hiển thị modal mua vé (thêm class open vào modal) */
        function showBuyTickets(){
            modal.classList.add('open')
        }
        /* Lặp qua từng thẻ button và nghe hành vi click */
        for (const buyBtn of buyBtns){
            buyBtn.addEventListener('click',showBuyTickets)
        }
        /* Hàm hiển thị modal mua vé (thêm class open vào modal) */
        function hideBuyTickets(){
            modal.classList.remove('open')
        }
        /* Nghe hành vi click vào button close */
        modalClose.addEventListener('click',hideBuyTickets)

        modal.addEventListener('click',hideBuyTickets)
        modalContainer.addEventListener('click',function(event){
            event.stopPropagation()
        })


        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight == headerHeight;
        /* đóng / mở mobile menu */
        mobileMenu.onclick = function(){
          var isClosed = header.clientHeight == 46;
          if (isClosed) {
            header.style.height = 'auto';
          } else {
            header.style.height = 'null';
            }
        }
        /* Tự động đóng khi chọn menu */
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
        for(var i =0 ; i<menuItems.length;i++){
        var menuItem = menuItems[i];
        /*  */
        menuItem.onclick = function(event){
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav') 
            if(isParenMenu){
            event.preventDefault();
        
        }else{
            header.style.height = null
            }

        }
    }

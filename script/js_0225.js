const header_swiper = () => {
    alert("");
    const swiper = new Swiper('.header-swiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
    });
}


// var navSwiper = new Swiper(".nav_wrap", {
//     slidesPerView: "auto",
//     spaceBetween: 10,
//     freeMode: true,
//     on: {
//         init:function(){
//             const thisUrl = window.location.href.split('/');
//             const thisCategory = thisUrl[thisUrl.length - 2].toLowerCase();
//             switch (thisCategory) {
//                 case 'vod': {
//                     const thisType = window.location.href.toLowerCase().split('type=');
//                     //this.slideTo(1); this.$wrapperEl[0].children[1].className += ' on';
//                     if (thisType.length < 2) {                            
//                         this.slideTo(1); this.$wrapperEl[0].children[2].className += ' on';
//                     } else {
//                         if (thisType[1].replace('&sv=', '').trim() == "5" || thisType[1].replace('&sv=', '').trim() == "6" || thisType[1].replace('&sv=', '').trim() == "7") {
//                             this.slideTo(0); this.$wrapperEl[0].children[1].className += ' on';
//                         } else {
//                             this.slideTo(1); this.$wrapperEl[0].children[2].className += ' on';
//                         }                            
//                     }
//                     break;
//                 }                    
//                 case 'schedule': this.slideTo(3); this.$wrapperEl[0].children[3].className += ' on';
//                 break;
//                 case 'ranking': this.slideTo(4); this.$wrapperEl[0].children[4].className += ' on';
//                 break;
//                 case 'cast': this.slideTo(5); this.$wrapperEl[0].children[5].className += ' on';
//                 break;
//                 case 'event': this.slideTo(6); this.$wrapperEl[0].children[6].className += ' on';
//                 break;
//                 default: this.slideTo(0);
//                 break;
//             }
//         }
//     }
// });
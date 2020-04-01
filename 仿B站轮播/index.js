var banner = {
    //第几张图片
    currentIndex : 0,
    //定时器
    timer : null,
    init () {
        this.initData();
        this.startMove();
        this.handle();
    },
    initData(){
        this.bannerList = document.getElementsByClassName('banner-list')[0];
        this.bannerWidth = this.bannerList.children[0].offsetWidth;
        this.bannerLength = this.bannerList.children.length;
        this.indexList = document.getElementsByClassName('index');
        this.activeIndex = document.getElementsByClassName('active')[0];
    },
    autoMove () {
        this.currentIndex++;
        this.changeIndex();
        this.bannerList.style.left = -this.currentIndex * this.bannerWidth + 'px';
    },
    startMove () {
        //bind 改变this指向 
        this.timer = setTimeout(this.autoMove.bind(this),1500)
    },
    changeIndex () {
        //取得当前的图片的下标 而不是第几张
        var i = this.currentIndex % (this.bannerLength-1);
        this.indexList[i].classList.add('active');
        this.activeIndex.classList.remove('active');
        this.activeIndex = this.indexList[i];
    },
    handle () {
        this.handleTransition();
        this.handleClick();
    },
    handleTransition () {
        var self = this;
        this.bannerList.addEventListener('transitionend',function(){
            //如果当前图片是最后一张 则重置为第一张
            if (self.currentIndex === self.bannerLength - 1){
                self.bannerList.style.left = 0;
                self.bannerList.style.transition = 'none';
                self.currentIndex = 0;
            }
            if (self.bannerList.offsetLeft === 0){
                self.bannerList.style.transition = 'ease-out .5s'
            }
            self.startMove();
        });
    },
    handleClick () {
        var self = this;
        // 闭包
        for (var i = 0; i< this.bannerLength-1 ; i++){
            (function(i){
                self.indexList[i].onclick = function(){
                    if (self.indexList[i].classList.contains('active')){
                        return 
                    }
                    clearTimeout(self.timer);
                    self.currentIndex = i;
                    self.changeIndex();
                    self.bannerList.style.left = -i * self.bannerWidth + 'px';
                }
            })(i)
        }
    }
}
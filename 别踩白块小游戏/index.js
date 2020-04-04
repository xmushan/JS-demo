var game = {
    timer: null,
    score: 0,
    step: 1,
    flag: false,
    init() {
        this.initData();
        this.handle();
    },
    initData() {
        this.game = document.getElementById('game');
        this.go = this.game.getElementsByClassName('start')[0];
        this.main = this.game.getElementsByClassName('main')[0];
    },
    handle() {
        var self = this;
        this.go.onclick = function () {
            self.flag = true;
            if (self.flag) {
                this.style.display = 'none';
                self.render();
                self.clickTarget();
            }else{
                return;
            }
        }
    },
    render() {
        this.main.style.top = '-120px';
        this.timer = setInterval(() => {
            this.main.style.top = this.main.offsetTop + this.step + 'px';
            if (this.main.offsetTop >= 0) {
                this.main.style.top = '-120px';
                this.renderRow();
            }
        }, 10);
    },
    renderRow() {
        var row = document.createElement('div');
        row.classList.add('row');
        var index = Math.floor(Math.random() * 4);
        for (var i = 0; i < 4; i++) {
            var col = document.createElement('col');
            col.classList.add('col');
            row.appendChild(col);
        }
        row.children[index].classList.add('target');
        this.main.insertBefore(row, this.main.children[0]);
        this.judge();
    },
    clickTarget() {
        this.main.onclick = (e) => {
            if (!e.target.classList.contains('target')) {
                this.endGame();
            }
            this.score += 1;
            e.target.classList.remove('target');
            this.leaveUp();
        }
    },
    endGame() {
        this.flag = false;
        clearTimeout(this.timer);
        alert(this.score);
    },
    leaveUp() {
        if (this.score % 5 === 0) {
            this.step++;
        }
    },
    judge() {
        var length = this.main.children.length;
        if (length === 7) {
            var lastChild = this.main.children[length - 1];
            for (var i = 0; i < 4; i++) {
                if (lastChild.children[i].classList.contains('target')) {
                    this.endGame();
                    break;
                }
            }
            this.main.removeChild(lastChild);
        }
    }
}
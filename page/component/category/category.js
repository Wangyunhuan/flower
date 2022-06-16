Page({
    data: {
        category: [
            {name:'玫瑰',id:'meigui'},
            {name:'百合',id:'baihe'},
            { name:'鲜花1',id:'1'},
            { name:'鲜花2',id:'2'},
            { name:'鲜花3',id:'3'},
            { name:'鲜花4',id:'4'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'meigui'
    },
    onReady(){
        var self = this;
        wx.request({
            url:' ',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})
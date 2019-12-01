/* $(function(){
    // 先截取 location.search 里面的id
    let id = location.search.substring(4);
    
    // 到数组里面把对应id的数据获取出来
    // phoneData.forEach(e=>{
    //     if(e.pID == id){
    //         console.log(e);

    //     }
    // })


    let target = phoneData.find(e => {
        return e.pID == id;
    })
    $('.summary-price em').text(`￥${target.price}`)

    $('.sku-name').text(`${target.name}`)

    $('.preview-img >img').attr('src',target.imgSrc)
}) */



$(()=>{
    let id = location.search.substring(4);
    let target = phoneData.find(e=>{
        if(e.pID == id){
            return id;
        }
    })
    $('.sku-name').text(`${target.name}`);
    $('.summary-price em').text(`￥${target.price}`)
    $('.preview-img img').attr('src',target.imgSrc)
})








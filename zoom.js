(function(window) {
    let defineLibrary = () => ({
        init : function(galleryId) {
            console.log('setup gallery')
            let container = document.querySelector(galleryId)

            if(! container) {
                console.error('please add the correct element')
                return;
            }

            let firstImage = container.querySelector('.image')
            let zoomImage = container.querySelector('.zoomed')

            if (! zoomImage) {
                console.error('please add the zoomedImage')
                return;
            }

            if (! firstImage) {
                console.log('please add the correct image')
                return;
            }

            zoomImage.style.backgroundImage = `url(${firstImage.src})`

            container.addEventListener('click' , function(e) {
                let elem = e.target;

                if(elem.classList.contains('image')) {
                    zoomImage.style.backgroundImage = `url(${elem.src})`
                }
            })

            zoomImage.addEventListener('mouseenter' , function() {
                this.style.backgroundSize = '250%'
            })

            zoomImage.addEventListener('mousemove' , function(e) {
                let postion = this.getBoundingClientRect()

                let x = e.clientX - postion.left
                let y = e.clientY - postion.top

                x = Math.round(100 / (postion.width / x))
                y = Math.round(100 / (postion.height / y))

                this.style.backgroundPosition = `${x}% ${y}%`

            })

            zoomImage.addEventListener('mouseleave' , function(){
                this.style.backgroundSize = 'cover'
                this.style.backgroundPosition = 'center'
            })

        }
    })

    if (typeof(galleryZoom) == 'undefined') {
        window.galleryZoom = defineLibrary();
    } else {
        console.log('gallery already defined.')
    }
})(window)

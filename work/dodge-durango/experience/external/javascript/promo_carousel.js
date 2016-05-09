var promoCarousel = function (c, a) {
        this.promoTiles = jQuery(c).find("ul:eq(0)");
        this.nextArrow = jQuery(c).children(".next-arrow");
        this.prevArrow = jQuery(c).children(".prev-arrow");
        this.visibleTiles = a;
        this.stepSize = 3;
        var b = this;
		
        if (this.promoTiles.children("li").length > this.visibleTiles) {
            this.promoTiles.width(((this.promoTiles.children("li:not('.super')").outerWidth(true)) * this.promoTiles.children("li:not('.super')").length) + ((this.promoTiles.children("li.super").outerWidth(true)) * this.promoTiles.children("li.super").length));
            
			jQuery([this.prevArrow[0], this.nextArrow[0]]).mouseenter
			(
				function()
				{
					jQuery(this).children().fadeIn(200);
				}
			);
			
			jQuery([this.prevArrow[0], this.nextArrow[0]]).mouseleave
			(
				function()
				{
					jQuery(this).children().fadeOut(200);
				}
			);
			
			jQuery([this.prevArrow[0], this.nextArrow[0]]).mousedown
			(
				function()
				{
					jQuery(this).children().fadeOut(0);
					jQuery(this).addClass("click");
				}
			);
			
			this.prevArrow.mouseup
			(
				function()
				{
					jQuery(this).children().fadeIn(0);
					jQuery(this).removeClass("click");
					b.scrollLeft();
				}
			);
			
			this.nextArrow.mouseup
			(
				function()
				{
					jQuery(this).children().fadeIn(0);
					jQuery(this).removeClass("click");
					b.scrollRight();
				}
			);
			
			jQuery(document).mouseup
			(
				function()
				{
					jQuery([b.prevArrow[0], b.nextArrow[0]]).removeClass("click");
				}
			);
        } else {
            jQuery(c).addClass("no-scroll");
        }
		
        this.scrollRight = function () {
			var d = (this.promoTiles.width() - (this.promoTiles.children("li:not('.super')").outerWidth(true) * this.visibleTiles)) * -1;
            var f = (this.promoTiles.children("li:not('.super')").outerWidth(true) * (this.stepSize * -1)) + (this.promoTiles.position()).left;
			
			if (f < d) {
                while (f < d) {
                    var e = this.promoTiles.children().eq(0);
                    e.remove();
                    this.promoTiles.append(e);
                    f = f + e.outerWidth(true);
                    this.promoTiles.css("left", ((this.promoTiles.position()).left + e.outerWidth(true)) + "px");
                }
                f = d;
            }
            this.promoTiles.find("img[lazysrc]").each(function () {
                if (((jQuery(this).parents("li").offset()).left - (jQuery(this).parents("li:not('.super')").outerWidth(true) * b.stepSize)) < (b.promoTiles.parent().offset()).left + b.promoTiles.parent().width()) {
                    chrysler.lazy.showPreloader(this);
                    chrysler.lazy.loadContent(this);
                }
            });
            this.promoTiles.animate({
                left: f
            }, 500);
            linkTrack("dodge_homepage_content_tile", "right_arrow");
        };
        this.scrollLeft = function () {
            var e = (this.promoTiles.position()).left + (this.promoTiles.children("li:not('.super')").outerWidth(true) * this.stepSize);
            if (e > 0) {
                while (e > (this.promoTiles.children("li:not('.super')").outerWidth(true) * (this.stepSize * -1))) {
                    var d = this.promoTiles.children().eq(this.promoTiles.children().length - 1);
                    d.remove();
                    this.promoTiles.prepend(d);
                    e = (this.promoTiles.position()).left - d.outerWidth(true);
                    this.promoTiles.css("left", e + "px");
                }
                e = 0;
            }
            this.promoTiles.find("img[lazysrc]").each(function () {
                if ((jQuery(this).parents("li").offset()).left < (b.promoTiles.parent().offset()).left) {
                    chrysler.lazy.showPreloader(this);
                    chrysler.lazy.loadContent(this);
                }
            });
            this.promoTiles.animate({
                left: e
            }, 500);
            linkTrack("dodge_homepage_content_tile", "left_arrow");
        };
    };
	
	jQuery(document).ready(function($) {
		$('.bhp-promo-carousel').each(function(index, element) {
			var promo_carousel = new promoCarousel($(element), 3);
		});
	});
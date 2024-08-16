jQuery(document).ready(function() {
	jQuery('.owc-section-page .owc-sp-open').on('click', function() {
		if(jQuery(this).next('.owc-sp-content').css('display') == 'none') {
			if(typeof(owc_sp_use_char) != 'undefined' && owc_sp_use_char === true) jQuery(this).find('.owc-sp-toggle-arrow').html(jQuery(this).parent().attr('data-down'));
			if(typeof(owc_sp_use_animation) != 'undefined' && owc_sp_use_animation === true) jQuery(this).next('.owc-sp-content').slideToggle(function() {
				jQuery(this).closest('.owc-section-page').addClass('owc-sp-active');
			});
			else jQuery(this).next('.owc-sp-content').toggle().closest('.owc-section-page').addClass('owc-sp-active');
		}
		else {
			if(typeof(owc_sp_use_char) != 'undefined' && owc_sp_use_char === true) jQuery(this).find('.owc-sp-toggle-arrow').html(jQuery(this).parent().attr('data-up'));
			if(typeof(owc_sp_use_animation) != 'undefined' && owc_sp_use_animation === true) jQuery(this).next('.owc-sp-content').slideToggle(function() {
				jQuery(this).closest('.owc-section-page').removeClass('owc-sp-active');
			});
			else jQuery(this).next('.owc-sp-content').toggle().closest('.owc-section-page').removeClass('owc-sp-active');
		}
	});
});
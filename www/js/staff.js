/**
 * Fetches staff detail data from the Server and initalizes a new page in document to change to.
 *
 * @ param Int id ... ID of the Staff Member
 *
 */
function loadStaffDetails(id) {
	
	loadingIn();
	
	$.getJSON(CONFIG.SERVER.base+CONFIG.SERVER.staff+id)
		.done(function(data, status, jqXHR) {
			if(!isEmpty(data.exception))
				{ ajaxErrorHandler(data, status, jqXHR); return; }

			var name = data.name.split(", ");
			var div = 	'<div id="staff_'+id+'" data-role="page" data-theme="b" data-subpage="true" data-title="Mitarbeiter & Professoren" class="staffdetails">'+
							'<div data-role="header" data-position="fixed" data-tap-toggle="false" data-theme="b" class="header">'+
								'<a href="#" data-rel="back" data-role="button" data-transition="slide" data-direction="reverse"><span class="icon-angle-left"></span></a>'+
								'<h1>HTWK App</h1>'+
							'</div>'+
					'<div data-role="content">'+
					'	<div class="inset">'+
					'		<h1>'+data.degree+' '+name[1]+' '+name[0]+'</h1>'+
					'		<ul data-nativedroid-plugin="cards" class="nativeDroidCards">'+
					'			<li data-cards-type="text">'+
					'				<!--<h2>Info</h2> BILD -->'+
					'				<img src="'+data.pictureData+'"/>'+
					'			</li>'+
					'			<li data-cards-type="text">'+
					'				<h1>Info</h1><hr/>'+
					'				<strong>Grad:</strong> '+data.degree+'<br/>'+
					'				<strong>Bereich:</strong> '+data.faculty+'<br/>'+
					'				<strong>Objekt:</strong> '+data.location+'<br/>'+
					'				<p>'+data.description+'</p>'+
					'			</li>'+
					'			<li data-cards-type="text">'+
					'				<h1>Kontakt</h1><hr/>'+
					'				<strong>E-Mail:</strong> <a href="mailto:'+data.email+'">'+data.email+'</a><br/>'+
					'				<strong>Telefon:</strong> <a href="tel:'+data.telephone+'">'+data.telephone+'</a><br/>'+
					'				<strong>Fax:</strong><hr/> '+data.telefax+
					'			</li>'+
					'			<li data-cards-type="text">'+
					'				<h1>Links</h1><hr/>'+
					'				<strong><a href="'+data.detailLink+'" class="external">Details zur Person</a></strong> '+
					'				<strong><a href="'+data.vcardLink+'" class="external">V-Card</a></strong>'+
					'			</li>'+
					'		</ul>'+
					'	</div>'+
					'</div>';
		
			div = $(div).on("pagehide", function (){$(this).remove();});

			$( "body" )
				.append(div)
				.trigger("create");
		
			$.mobile.initializePage();
			$.mobile.changePage("#staff_"+id);
		
			loadingOut();
		})
		.fail(ajaxErrorHandler);
}
<?php
//Formulaire newsletter
if(!empty($_POST['Email'])){

	$fieldEmail = trim(strip_tags(htmlentities($_POST['Email'],ENT_QUOTES)));

	$mail_to = 'sallartiste@gmail.com';
	$subject = 'Formulaire newsletter via www.sdstory.org ';

	$bodyMessage = 'Ce e-mail vient du formulaire de newsletter du site SDSTORY.ORG: '.$fieldEmail;

	$headers = 'From: '.$fieldEmail. "\r\n";
	$headers .= 'Reply-To: '.$fieldEmail."\r\n";

	$mail_status = mail($mail_to, $subject, $bodyMessage, $headers);

	if ($mail_status) { ?>
		<script language="javascript" type="text/javascript">
			alert('Merci de nous avoir fait confiance....');
			window.location = 'index.php';
		</script>
	<?php
	}
	else { ?>
		<script language="javascript" type="text/javascript">
			alert('Message failed. Please, send an email to info@sdstory.org');
			window.location = 'index.php';
		</script>
	<?php
	}
}

?>

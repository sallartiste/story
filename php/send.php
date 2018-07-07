<?php
// Formulaire de contact
if(isset($_POST['name']) && isset($_POST['email'])){

	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['sujet']) && !empty($_POST['message'])){

		$field_name = trim(strip_tags(htmlentities($_POST['name'],ENT_QUOTES)));
		$field_email = trim(strip_tags(htmlentities($_POST['email'],ENT_QUOTES)));
		$field_sujet = trim(strip_tags(htmlentities($_POST['sujet'],ENT_QUOTES)));
		$field_message = trim(strip_tags(htmlentities($_POST['message'],ENT_QUOTES)));

		$mail_to = 'sdiverstory@gmail.com';
		$body_message = 'From: '.$field_name."\n";
		$body_message .= 'E-mail: '.$field_email."\n";
		$body_message .= 'Message: '.$field_message;

		$headers = 'From: '.$field_email."\r\n";
		$headers .= 'Reply-To: '.$field_email."\r\n";

		$mail_send = mail($mail_to, $field_sujet, $body_message, $headers);

		if ($mail_send) { ?>
			<script language="javascript" type="text/javascript">
				alert('Merci pour votre message. Nous vous contacterons bientôt.');
				window.location = 'index.php#contact';
			</script>
		<?php
		}
		else { ?>
			<script language="javascript" type="text/javascript">
				alert('Erreur. Si vous arrivez pas à envoyer le message, contacter info@sdstory.org');
				window.location = 'index.php#contact';
			</script>
		<?php
  	}
	}
}

?>


<?php
session_start();

include("../includes/navbar.php");
?>

<div class="recipe-container">

    <h2>My Recipes</h2>

    <div class="recipe-grid">

        <!-- Nanti ditampilkan dari database -->

    </div>

</div>

<?php include("../includes/footer.php"); ?>
user/edit_recipe.php
<?php

session_start();

include("../includes/navbar.php");

// nanti ambil data berdasarkan id

?>

<form action="process_recipe.php?action=update"
      method="POST"
      enctype="multipart/form-data">

    <!-- Form edit -->

</form>

<?php include("../includes/footer.php"); ?>
user/profile.php
<?php

session_start();

include("../includes/navbar.php");

?>

<div class="profile">

    <h2>My Profile</h2>

    <p>Name :
        <?php echo $_SESSION['user']['username']; ?>
    </p>

    <p>Email :
        <?php echo $_SESSION['user']['email']; ?>
    </p>

</div>

<?php include("../includes/footer.php"); ?>
user/process_recipe.php
<?php

include("../config/koneksi.php");

$action = $_GET['action'];

switch($action){

    case "create":

        // INSERT

    break;

    case "update":

        // UPDATE

    break;

    case "delete":

        // DELETE

    break;

}

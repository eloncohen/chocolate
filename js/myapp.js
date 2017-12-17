var c2 = $C(".test");
c2.html("changing html!!");
$C(".test").html("changing html!!").click(testAlert);
function testAlert(){
  alert("click");
}
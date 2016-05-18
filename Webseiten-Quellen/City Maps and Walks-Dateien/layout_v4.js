function read_cookie(name)
{
	var result;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}


function write_cookie(name, value)
{
	var date = new Date();
	date.setTime(date.getTime()+(30*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}


function get_user_acc_blk(el)
{
	var mkey = read_cookie("member_key");

	if (mkey != null && read_cookie("member_hash") != null)
		if (el == 1)
			return '<LI class="m1"><DIV></DIV><A href="/member/index.php?do=logout">Logout</A></LI><LI class="m2"><DIV><DIV><A href="/member/'+ mkey +'">Account</A></DIV></DIV></LI>';
		else
			return '<LI><A href="/member/'+ mkey +'">Account</A></LI><LI><A href="/member/index.php?do=logout">Logout</A></LI>';
	else
		if (el == 1)
			return '<LI class="m1"><DIV></DIV><A href="/member/index.php?do=login">Log In</A></LI><LI class="m2"><DIV><DIV><A href="/member/index.php?do=acc_reg">Join Now</A></DIV></DIV></LI>';
		else if (el == 2)
			return '<LI class="m1" ><DIV></DIV></LI><LI class="m2" style="margin-left:20px"><DIV><DIV><A href="/member/index.php?do=login">Log In</A></DIV></DIV></LI>';
		else
			return '<LI><A href="/member/index.php?do=acc_reg">Join Now</A></LI><LI><A href="/member/index.php?do=login">Log In</A></LI>';
}


function show_user_acc_blk(el)
{
	document.write(get_user_acc_blk(el));
}


function show_js_menu(flag)
{
    var x = document.getElementById("mtop");
    var y = x.getElementsByClassName("js_inner");
    y[0].style.visibility = (flag ? "visible" : "hidden");
}


function show_js_inner()
{
	document.write('<UL><LI><A href="/gps-tour-guides/index.html">All Cities</A></LI><LI><A href="/mobile-app.html">Mobile App</A></LI><LI><A href="/articles/index.html">Articles</A></LI><LI><A href="/about-us.html">About</A></LI><LI><A href="/author.html">Tour Author</A></LI><LI><A href="/privacy-policy.html">Privacy Policy</A></LI><HR><SCRIPT>show_user_acc_blk(2);</SCRIPT></UL><DIV class="close"><A href="javascript:void(0)" onClick="show_js_menu(0)">&times;</A></DIV>');
}

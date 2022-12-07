//alert("Please enter the value");

function myFunction(number)
{
    var Number=document.getElementById('x1').value;
    if(Number=="")
        alert("Please enter the value");
    
    var num1 = parseInt(Number);
    var num2 = parseInt(Number);
    var num3 = parseInt(Number);
    var num4 = parseInt(Number);
    if(num1==Number)
    {
        if(num1%2==0)
            //var msg="Even Number";
            var msg=`${num1} is Even Number`;
        else
            var msg=`${num1} is Odd Number`;
    }

    if(num2==Number) 
    {
            var term =0;
            var count = 0;
            var m =0;
            if (num2 == 1)
                var msg1=`${num2} is not prime`;
            if ((num2 == 2) || (num2 == 3)) 
                var msg1=`${num2} is prime`;
            if ((num2 %2)==0)
                var msg1=`${num2} is not prime`;

            for (m=3 ; m*m <=num2;m+=2)
            {
                if((num2%m)==0)
                    var msg1=`${num2} is not prime`;
                else
                    var msg1=`${num2} is prime`;
            }
    }

    if(num3==Number)
    {
        var a = 1;
	    var b = num3;
		var c = 0;

		do
		{
			a = a * 10;
			c = c +1;
		}while(a <= b);

        //var msg2=`${c} is count`;
    }


    if(num4==Number) 
    {
    var rev = 0;
		while(num4 > 0)
		{
			var rem = num4 % 10;
			rev = rev * 10 + rem;
			num4 = Math.floor(num4 / 10);
		}
        //var msg3=`${rev} is reverse`;
    }

    document.getElementById('result1').innerHTML= msg;
    document.getElementById('result2').innerHTML= msg1;
    document.getElementById('result3').innerHTML= c;
    document.getElementById('result4').innerHTML= rev;
}

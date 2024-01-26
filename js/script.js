document.onload = showData();
    var date = new Date();
    var current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    function calculate() {
        var u = document.getElementById("unit").value;
        var unit = parseInt(u);
        var res = 0;
        if (unit < 101) {
            res = 0;
        }
        else if (unit < 401) {
            var h = unit - 100;
            if (h < 101) {
                res = h * 2.25;
            }
            else {
                var f = h - 100;
                res = (100 * 2.25) + (f * 4.5);

            }
        }
        else if (400 < unit && unit < 501) {
            var f = unit - 400;
            res = (1125) + (f * 6);
        }
        else if (500 < unit && unit < 601) {
            var f = unit - 500;
            res = (1950) + (f * 8);
        }
        else if (600 < unit && unit < 801) {
            var f = unit - 600;
            res = (2750) + (f * 9);
        }
        else if (800 < unit && unit < 1001) {
            var f = unit - 800;
            res = (4550) + (f * 10);
        }
        else if (unit > 1000) {
            var f = unit - 1000;
            res = (6550) + (f * 11);
        }
       
        var inputTitle = u;
        var inputDate = current_date;

        if (inputTitle === '') {
            alert("You must write something!");
        } else {
            try {
                addData(inputTitle, inputDate, res);
            } catch (error) {
                alert("error" + error);
            }


        }
        document.getElementById("result").innerHTML="Your Bill IS : " +res+" rs";
        document.getElementById("unit").value = " ";
    }
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }


    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            deleteData(close);

        }

    }


    function addData(inputTitle, inputDate, res) {
        var tneb;

        if (localStorage.getItem("tneb") == null) {
            tneb = [];

        }
        else {
            tneb = JSON.parse(localStorage.getItem("tneb"));

        }
        tneb.push({
            localTitle: inputTitle,
            localDate: inputDate,
            localRes: res,

        });
        localStorage.setItem("tneb", JSON.stringify(tneb));

        //showData();
    }


    function showData() {

        var tneb;
        if (localStorage.getItem("tneb") == null) {
            tneb = [];
        }
        else {
            tneb = JSON.parse(localStorage.getItem("tneb"));

        }
        tneb.forEach(function (element, index) {
            var li = document.createElement("li");
            var h2 = document.createElement("h4");
            var h5 = document.createElement("h5");
            var p = document.createElement("h5");
            var div = document.createElement("div");
            var br = document.createElement('br');
            var s1 = " Units Consumed : " + element.localTitle+" "+"units";
            var s2 = " Date : " + element.localDate;
            var s3 = " Bills : " + element.localRes+" "+"rs";
            var t1 = document.createTextNode(s1);
            var t2 = document.createTextNode(s2);
            var t3 = document.createTextNode(s3);
            h2.appendChild(t1);
            h5.appendChild(t2);
            p.appendChild(t3);

            div.appendChild(h2);
           
            div.appendChild(h5);
            
            div.appendChild(p);
            li.appendChild(div);
            document.getElementById("myUL").appendChild(li);
        });
    }
    

    function deleteData(index) {
        var tneb;
        if (localStorage.getItem("tneb") == null) {
            tneb = [];
        }
        else {
            tneb = JSON.parse(localStorage.getItem("tneb"));
        }
        tneb.splice(index, 1);
        localStorage.setItem("tneb", JSON.stringify(tneb));
        //showData();

    }

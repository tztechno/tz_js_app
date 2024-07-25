        function lucas_number(n) {
            if (n === 0) {
                return 2;
            } else if (n === 1) {
                return 1;
            } else {
                return lucas_number(n - 1) + lucas_number(n - 2);
            }
        }

        function calculate() {
            var n = document.getElementById('inputN').value;
            var start_time = performance.now();
            var result = lucas_number(n);
            var process_time = performance.now() - start_time;
            document.getElementById('result').innerText = "LucasNumber L" + n + " = " + result;
            document.getElementById('time').innerText = "Time: " + (process_time / 1000).toFixed(3) + " sec";
        }

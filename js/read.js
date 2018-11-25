var fileReader = new Vue(
    {
        el: '#loadBox',
        data:
            {
                elements: '',
            },
        methods:
            {
                //Функция чтения файла
                readFile: function (e) {
                    var vm = this;
                    var file = e.target.ownerDocument.getElementById('file').files[0];
                    var reader = new FileReader();
                    reader.onload = function () {
                        vm.elements = JSON.parse(reader.result);
                    };
                    reader.readAsText(file);
                }
            },
        created: function () {
        }
    });
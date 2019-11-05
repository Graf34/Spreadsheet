
if (localStorage.getItem('rs')==null)//Если колличество строк не записано
{
localStorage.setItem('rs',5);
localStorage.setItem('cs',5);
}
var rows   = localStorage.getItem('rs');//Колличество строк
var column = localStorage.getItem('cs');//Колличество столбцов



function draw(){  
var row="";
for (c=0;c<rows;c++){
for (r=0;r<column;r++){
    var id = Number((String(r) +''+String(c)));//Генирация ID ячейки

    if (localStorage.getItem(id)==null)//Заполнение новых ячеек
    {
        localStorage.setItem(id,'');
    }
    //Строка таблицы
      row+= '<input type="text"class="cell" id='+id+' value="'+localStorage.getItem(id)+'" readonly="true" ondblclick="this.readOnly=\'\';" onblur="this.readOnly=\' true\';" onchange="localStorage.setItem(('+id+'), this.value);">';
    document.getElementById('table').innerHTML=row;//Добавление в таблицу  
}
    row+= '<br/>';
    document.getElementById('table').innerHTML=row;
}
//Изменение размеров ячеек в зависимости 
$('.cell').css('width',(100/column)+'%');
$('.cell').css('height',(40/rows)+'%');
}



function columnmin(){
    if (column>1){//Если столбец не последний 
    var rowsnull=0//Колличество пустых ячеек
    for (c=0;c<rows;c++){
        
        if (localStorage.getItem(Number(String(column-1)+String(c)))!='')//Если ячейка заполнена
        {
            if (confirm("Столбец содержит запись!\n Удалить?"))
            {
                //Очистка всего столбца
                for (t=0;t<column;t++){
                    localStorage.setItem(Number(String(column-1)+String(c)),'');
                }
            column--;
            localStorage.setItem('cs',column);
            draw();
            }
        }
        else{
            rowsnull++;
        }
       
    }
    //Если все пустые 
    if (rowsnull==rows)
    {
        column--;
        localStorage.setItem('cs',column);
        draw();
    }
    rowsnull=0
    
}
}

function columnplus(){
    column++;
    localStorage.setItem('cs',column);
    draw();
}


function rowmin(){
    if (rows>1){//Если строка не последняя
    var collumnnull=0//Колличество пустых ячеек
    for (c=0;c<column;c++){

        if (localStorage.getItem(Number(String(c)+String(rows-1)))!='')//Если ячейка заполнена
        {
            if (confirm("Строка содержит запись!\n Удалить?"))
            {
                //Очистка всей строки
                for (t=0;t<column;t++){
                    localStorage.setItem(Number(String(t)+String(rows-1)),'');
                }
            rows--;
            localStorage.setItem('rs',rows);
            draw();
            }
        }
        else{
            collumnnull++;
        }
       
    }
    //Если все ячейки пустые
    if (collumnnull==column)
    {
        rows--;
        localStorage.setItem('rs',rows);
        draw();
    }
    collumnnull=0
    
}
}

function rowplus(){
    rows++;
    localStorage.setItem('rs',rows);
    draw();
}
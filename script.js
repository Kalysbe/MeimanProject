const data = [ 
    {
        id: 18560,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Первомайский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    },
    {
        id: 18561,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Первомайский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    },
    {
        id: 18562,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Свердловский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    },
    {
        id: 18563,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Октябрьский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    },
    {
        id: 18564,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Ленинский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    }
    ,
    {
        id: 18565,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Ленинский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    } , 
    {
        id: 18566,
        created_At: '2022-01-26T09:21:34.516513',
        side1_Name: 'Ленинский районный суд г.Бишкек',
        side1_Room: 'Зал №1',
        side2_Name: 'Исправительная колония №3 Чуйской области с. Новопокровка',
        side2_Room: 'Зал №1',
        side3_Name: null,
        side3_Room: null,
        side4_Name: null,   
        side4_Room: null,
        date: '2022-02-01T00:00:00',
        start_Time: '13:30',
        end_Time: '14:30',
        case_Details: null,
        fullname: 'Бегалиев Тилек Ишеналиевич'   
    }, 
    ]
   
    const categories = Array.from(new Set(data.map(item => item.side1_Name)));
        const buttonContainer = document.getElementById('button-container');
        categories.forEach(category => {
        const count = data.filter(item => item.side1_Name === category).length;
        const Card = document.createElement('button');
        Card.style.width = 18 + 'rem';
        Card.classList.add('category-button','btn','border','ms-1','mb-1')
        Card.innerHTML = `
            <div>
                <h5 class="card-title text-center">${category}</h5>
            </div>
            <span class="fs-2 ">
                ${count}
            </span>
        `
      
        Card.addEventListener('click', () => {
                const filteredItems = data.filter(item => item.side1_Name === category);
                updateList(filteredItems)
        });
        buttonContainer.appendChild(Card);
        });

        const allButton = document.createElement('button');
        allButton.style.width = 18 + 'rem'
        allButton.classList.add('category-button','btn','border','active','ms-1','mb-1')
        allButton.innerHTML = `
            <div>
                <h5 class="card-title text-center">Все заявки</h5>
            </div>
            <span class="fs-2">
                ${data.length}
            </span>
        `
        allButton.addEventListener('click', () => {
                updateList(data)
        });
        buttonContainer.appendChild(allButton);

        function updateList(newData) {
            const tableBody = document.getElementById('accordion-data')
            tableBody.innerHTML = ''
                for (let item  of newData) {
                const row = document.createElement('div');
                row.style.width = 100 + '%'
                row.classList.add('accordion-item')
                row.innerHTML = `
                <h2 class="accordion-header" id="heading${item.id}">
                <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${item.id}" aria-expanded="false" aria-controls="collapse${item.id}">
                    <div class='d-flex flex-column'>
                        <span class=''><strong>Номер приказа:</strong> ${item.id}</span>
                        <span class='me-5'><strong>Дата:</strong> ${item.date.slice(0,10)}</span>
                        <span><strong>Место проведения суда: </strong> ${item.side1_Name} - ${item.side1_Room}</span>
                    </div>

                </button>
                </h2>
                    <div id="collapse${item.id}" class="accordion-collapse collapse" aria-labelledby="heading${item.id}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div>
                            <span><b>Дата создания приказа:</b>${item.created_At.slice(0,10)}</span>
                            <div>
                                <div>
                                    ${item.side2_Name ? item.side2_Name + ' - ' : ''}  ${item.side2_Room ? item.side2_Room : ''}
                                </div>
                                <div>
                                    ${item.side3_Name ? item.side3_Name + ' - ' : ''}  ${item.side3_Room ? item.side3_Room : ''}
                                </div>
                                <div>
                                    ${item.side4_Name ? item.side4_Name + ' - ' : ''}  ${item.side4_Room ? item.side4_Room : ''}
                                </div>
                            </div>
                        <div>
                            <span><b>Дата:</b> ${item.date.slice(0,10)}</span>
                            <span><b>Начало:</b> ${item.start_Time}</span>   
                            <span><b>Конец:</b> ${item.end_Time}</span>       
                        </div>
                        <span>
                        ${item.case_Details ? item.case_Details : ''}    
                        <span>
                        <div>
                        <span><b>Ф И О:</b> ${item.fullname}</span>    
                        </div>    
                        </div>
                    </div>
                    </div>
      
                `;
                tableBody.appendChild(row);
                }
                
        }

        let allButtons = document.querySelectorAll('.category-button');
        allButtons.forEach((item) => {
            item.addEventListener('click', (e)=> {
                allButtons.forEach((btn) => {
                    btn.classList.remove('active')
                })
                item.classList.add('active')
            })
        })

        updateList(data)

        const key = "68909dc31ae0b122e1e951c4431a2dfe"
        let message = ''
        function pushMessageTelegram() {
            if(localStorage.getItem('lengthData') < data.length) {
                localStorage.setItem('lengthData',data.length)
                  message = `Поступила новая заявка в ${data.at(-1).side1_Name} с номером: ${data.at(-1).id}`
                  let xhttp = new XMLHttpRequest();
                  xhttp.open("GET",`http://pushmebot.ru/send?key=${key}&message=${message}`,true)
                  xhttp.send()
                updateList(data)
            }
            else if (localStorage.getItem('lengthData') > data.length) {
                localStorage.setItem('lengthData',data.length)
                updateList(data)
            }
        }
         setInterval(pushMessageTelegram,5000)
 
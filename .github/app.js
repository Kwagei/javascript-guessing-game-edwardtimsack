const display = () =>{

    random_number = generate_random_number(100)
    const section = document.createElement('section')

    for(let i = 0; i < 100; i++){
        
        let rn = Math.floor(Math.random() * numbers.length);
        const button = `<button class="number" data-value="${numbers[rn]}">${numbers[rn]}</button>`
        section.innerHTML += button
        backup.push(numbers[rn])
        numbers.splice(rn,1)

    }
      main.appendChild(section)

}
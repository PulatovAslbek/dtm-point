const elHeader = document.querySelector('.header');

let score = prompt('Balingizni kiriting Hurmatli Fuqoro...', 0) - 0

if (score < 80) {
    elHeader.textContent = 'Siz Talaba Bo\'la olmadingiz Edi IT ni o\'rgansez Bo\'ladi :)'
} else if (score >= 80 && score < 100) {
    let confirmStudent = confirm(' Siz super puper kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 3000$ \n Shuncha Pul to\'lashga Rozimisiz  ?')
    if (confirmStudent) {
        let userMoney = prompt('Manga qara oo Qancha puling bor O\'zi ')
        if (userMoney >= 3000) {
            elHeader.textContent = 'Qoyile Talaba bo\'ldingiz shuncha pul to\'lab bo\'saham :)'
        }
    }

} else if (score >=  100 && score < 150) {
    let studentConsent = confirm(' Siz endi kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori yiliga 2000$ \n Shuncha pul to\'lashga  Rozimisiz ?')
    if (studentConsent) {
        let userMoney = prompt('Hurmatli fuqoroo... \n Qancha pulingiz bor')
        if (userMoney >= 2000) {
            elHeader.textContent = 'Tabriklaymiz Shuncha Pul ketkazib Bo\'sayam O\'qishga kirdingiz :)'
        }
    }
} else if (score >= 150 && score <= 200) {
    elHeader.textContent = 'Tabriklaymiz Sizni mega mozgligiz sizga Grand Asosida O\'qishga kirishizga yordam berdi :)'
}
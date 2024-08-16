export function mainSlides() {
  const marketingBtn = document.querySelector('.skills_marketing')
  const visualBtn = document.querySelector('.skills_visual')
  const siteBtn = document.querySelector('.skills_site')
  const promotionBtn = document.querySelector('.skills_promotion')
  const analyticsBtn = document.querySelector('.skills_analytics')
  const allSkills = document.querySelectorAll('.skills__skill')
  const disable = document.querySelector('skills_disable')
  const allGrids = document.querySelectorAll('.skills__grid')
  const marketingGrid = document.querySelector('.skills__grid_1')
  const visualGrid = document.querySelector('.skills__grid_2')
  const siteGrid = document.querySelector('.skills__grid_3')
  const promotionGrid = document.querySelector('.skills__grid_4')
  const analyticsGrid = document.querySelector('.skills__grid_5')
  const pagination = document.querySelectorAll('.pagination__grid')


   function setActive(elem) {
    allSkills.forEach((item) => {
      item.classList.remove('skills_active')
    })
    elem.classList.add('skills_active')
  }
  function enableItem(elem, elem2) {
    pagination.forEach((item) => {
      item.classList.add('skills_disable')
    })
    allGrids.forEach((item) => {
      item.classList.add('skills_disable')
    })
    elem.classList.remove('skills_disable')
    elem2.classList.remove('skills_disable')
  }
  visualBtn.addEventListener('click', () => {
    setActive(visualBtn)
    enableItem(visualGrid, pagination[1])
  })
  marketingBtn.addEventListener('click', () => {
    setActive(marketingBtn)
    enableItem(marketingGrid, pagination[0])
  })
  siteBtn.addEventListener('click', () => {
    setActive(siteBtn)
    enableItem(siteGrid, pagination[2])
  })
  promotionBtn.addEventListener('click', () => {
    setActive(promotionBtn)
    enableItem(promotionGrid, pagination[3])
  })
  analyticsBtn.addEventListener('click', () => {
    setActive(analyticsBtn)
    enableItem(analyticsGrid, pagination[4])
  })
}
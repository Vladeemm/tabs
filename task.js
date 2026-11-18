document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.getElementById('tabs1');
  if (!tabsContainer) return;

  const navigation = tabsContainer.querySelector('.tab__navigation');
  const contents = tabsContainer.querySelector('.tab__contents');

  const tabButtons = navigation.querySelectorAll('.tab');
  const contentBlocks = contents.querySelectorAll('.tab__content');

  // Функция переключения
  const switchTab = (index) => {
    // Снимаем активные классы со всех кнопок и блоков
    tabButtons.forEach((btn) => btn.classList.remove('tab_active'));
    contentBlocks.forEach((block) => block.classList.remove('tab__content_active'));

    // Добавляем активные классы для выбранного индекса
    if (tabButtons[index]) {
      tabButtons[index].classList.add('tab_active');
    }
    if (contentBlocks[index]) {
      contentBlocks[index].classList.add('tab__content_active');
    }
  };

  // Навешиваем обработчики на кнопки
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => switchTab(index));
  });
});
export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">FOOD*FACTORY</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Рестораны</a>
          <a href="#">Доставка</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЕДА КАК
              <br />
              НА <span>Заводе</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Фуд-фэктори — это конвейер качества. Каждый бургер, каждый хот-дог, каждый соус — без компромиссов. Россия, мы накормим тебя правильно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать сейчас
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: `url("https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/db6d539d-ec55-41af-be6d-ae974dd9a809.jpg") center center / cover` }}>
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #РОССИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ БЕЗ КОМПРОМИССОВ * СОЧНО И МОЩНО * FOOD FACTORY RUSSIA * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * КАЧЕСТВО НА ПОТОКЕ *
            БУРГЕРЫ БЕЗ КОМПРОМИССОВ * СОЧНО И МОЩНО * FOOD FACTORY RUSSIA * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * КАЧЕСТВО НА ПОТОКЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ ЗАВОДА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/db6d539d-ec55-41af-be6d-ae974dd9a809.jpg"
                alt="Factory Smash Burger"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Factory Smash</h3>
                  <span className="price">490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная котлета смэш, фирменный соус, карамелизованный лук, маринованный перец на бриоши.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/8adfd877-5361-4923-b285-5cf2959c4e45.jpg"
                alt="Chicken Factory"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Chicken Factory</h3>
                  <span className="price">420 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Хрустящая курица, острый соус, коул-слоу и маринованные огурцы.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/6f2a461c-a54d-4070-9b84-ae15c9ac1d78.jpg"
                alt="Factory Fries"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Factory Fries</h3>
                  <span className="price">190 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Золотистый картофель фри с фирменными соусами на выбор — классика, спайси или сырный.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЭТО НЕ ПРОСТО ЕДА.</h2>
            <p className="vibe-text">
              Food Factory Russia — это целая культура. Уличный фастфуд, поднятый до уровня искусства. Открытая кухня, живой огонь и команда, которая горит своим делом. Приходи голодным — уходи с улыбкой.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img" style={{ background: `url("https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/ebc0e831-c0a8-418f-9e4a-3c8920de919f.jpg") center center / cover` }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @FOODFACTORYRUSSIA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/db6d539d-ec55-41af-be6d-ae974dd9a809.jpg"
                alt="Food Factory 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/8adfd877-5361-4923-b285-5cf2959c4e45.jpg"
                alt="Food Factory 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/6f2a461c-a54d-4070-9b84-ae15c9ac1d78.jpg"
                alt="Food Factory 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/a5f4cc91-65d1-4474-aaa3-e89d5dc7e55e/files/ebc0e831-c0a8-418f-9e4a-3c8920de919f.jpg"
                alt="Food Factory 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">FOOD*FACTORY</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Качество на потоке. Вкус без компромиссов. Food Factory Russia — кормим страну правильно.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Рестораны
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Чт: 10:00 - 23:00</li>
            <li>Пт-Сб: 10:00 - 02:00</li>
            <li>Вс: 10:00 - 23:00</li>
            <li>Без выходных</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 FOOD FACTORY RUSSIA</span>
          <span>КАЧЕСТВО НА ПОТОКЕ</span>
          <span>VK / TG / YT</span>
        </div>
      </footer>
    </>
  );
}

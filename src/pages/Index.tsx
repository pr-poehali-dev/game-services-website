import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      id: 1,
      title: "Прокачка персонажа",
      description: "Быстрая и безопасная прокачка вашего персонажа в Stands 2",
      image: "/img/b35e601e-e032-4fee-8e61-d60182cbc669.jpg",
      features: ["24/7 онлайн", "Гарантия безопасности", "Быстрое выполнение"],
      prices: {
        basic: { name: "Базовый", price: "1500₽", levels: "1-20 уровень" },
        pro: { name: "Про", price: "2500₽", levels: "1-50 уровень" },
        elite: { name: "Элит", price: "4000₽", levels: "1-100 уровень" }
      }
    },
    {
      id: 2,
      title: "Повышение рейтинга",
      description: "Поднимем ваш рейтинг до желаемого уровня с гарантией",
      image: "/img/222a4fae-8e8c-4ce6-ad12-b436b1d6caca.jpg",
      features: ["Профессиональные игроки", "Стратегический подход", "Результат гарантирован"],
      prices: {
        basic: { name: "Бронза → Серебро", price: "2000₽", levels: "Bronze to Silver" },
        pro: { name: "Серебро → Золото", price: "3500₽", levels: "Silver to Gold" },
        elite: { name: "Золото → Платина", price: "5500₽", levels: "Gold to Platinum" }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Orbitron']">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8">
              <Icon name="Gamepad2" size={20} className="text-primary" />
              <span className="text-primary font-medium">Stands 2 Services</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              GAMING
              <br />
              SERVICES
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональные услуги по прокачке персонажей и повышению рейтинга в Stands 2. 
              Быстро, безопасно, с гарантией результата.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg">
                <Icon name="Zap" size={20} className="mr-2" />
                Начать прокачку
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold px-8 py-4 text-lg">
                <Icon name="Trophy" size={20} className="mr-2" />
                Поднять рейтинг
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет для достижения ваших игровых целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="border-primary/30 text-primary bg-primary/10">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-foreground">Тарифные планы:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(service.prices).map(([key, plan]) => (
                        <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-muted/30 hover:border-primary/30 transition-colors">
                          <div>
                            <div className="font-semibold text-foreground">{plan.name}</div>
                            <div className="text-sm text-muted-foreground">{plan.levels}</div>
                          </div>
                          <div className="text-xl font-bold text-primary">{plan.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-3">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Почему мы?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход к каждому заказу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "Shield",
                title: "100% Безопасность",
                description: "Ваш аккаунт в полной безопасности. Используем только официальные методы игры."
              },
              {
                icon: "Clock",
                title: "Быстрое выполнение",
                description: "Выполняем заказы в кратчайшие сроки благодаря команде профессионалов."
              },
              {
                icon: "Users",
                title: "Опытная команда",
                description: "Наши игроки имеют многолетний опыт и высокие рейтинги в Stands 2."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 text-center group">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами прямо сейчас и получите персональную консультацию по вашему заказу
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Stands 2 Gaming Services. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
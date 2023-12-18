## O admin.geniustv.cz

Jedná se o admin zónu pro správu ISP a jejich zálazníků ve službě GeniusTV.

Je zde možno vytvářet a spravovat zákazníky včetně jejich služeb, které mohou obsahovat STB

Každá vytvořená služba obsahuje i tzv. identitu, která slouží pro přihlášení v mobilích aplikacích, samsungTV, LGTV, webové aplikaci.
Je zde možnost vytvoření specifických údajů nebo nechat na systému a přihlášení se vygeneruje.

## Instalace
Instalace probíhá standartně skrz clon tohoto repa a následně instalace skrz composer pomocí příkazu 
~~~
    composer install 
~~~ 
v daném adresáři.

Následně se spustí příkaz pro vytvoření tabulek v db ( po configuraci .env )
~~~
    php artisan migrate
~~~

Pro získání listu ISP je nutno vyplnit s .env
~~~
    IPTV_DOKU_API="https://iptvdoku.grapesc.cz/api/"
    IPTV_DOKU_USERNAME=VAS_EMAIL
    IPTV_DOKU_PASSWORD=VASE_HESLO
~~~
a následně spustit 
~~~
    php artisan nangu:fetch_isps
~~~

Pro počáteční získání přístupů
~~~
    php artisan db:seed
~~~
Kdy se vytvoří uživatel s ISP id 7 
~~~
    admin@admin.cz
    1122334455
~~~

Následně se již přihlásíte, doporučuji vytvořit nového uživatele a tohoto odebrat.

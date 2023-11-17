<x-mail::message>
    <b> Vítejte v administrátorské zóně GeniusTV.</b><br>
    <br>
    Vaše přístupové údaje jsou: <br>
    <br>
    <b>{{ $email }}</b> <br>
    <b>{{ $password }}</b> <br>
    <x-mail::button url="https://admin.geniustv.cz">
        Vstoupit do admin zóny
    </x-mail::button>
    S pozdravem,<br>
    Tým GeniusTV

</x-mail::message>

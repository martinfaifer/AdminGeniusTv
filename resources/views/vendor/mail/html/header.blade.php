@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'GeniusTV')
<img src="https://www.geniustv.cz/images/logo_grape_genius_tv_300x300_px.png" class="logo" alt="GeniusTV">
<b>GeniusTV</b>
@else
{{ $slot }}
@endif
</a>
</td>
</tr>

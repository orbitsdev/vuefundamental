



@extends('layouts.app')


@section('content')


<div id="app">
 
<router-link to="/create_user"> Create User </router-link>
<router-link to="/edit_user"> Edit User </router-link>
<hr>
<router-view></router-view>
</div>

@endsection
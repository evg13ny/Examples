<?php

class Contact extends Controller
{
    function index()
    {        
        $data['page_title'] = "Contuct Us";

        $this->view("minima/contact", $data);
    }
}

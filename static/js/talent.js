const domain="https://talents.arbre-clair.fr/"

const lastUpdate={
    assassin: "11 Nov 20",
    champion: "11 Nov 20",
    cleric: "11 Nov 20",
    confessor: "11 Nov 20",
    druid: "14 Nov 20",
    duelist: "14 Nov 20",
    frostweaver: "14 Nov 20",
    knight: "14 Nov 20",
//    myrmidon: "11 Nov 20",
    ranger: "14 Nov 20",
    templar: "14 Nov 20",
}

class TalentContainer extends HTMLElement {
    constructor() {
        super();

        this._version="1.1";

        this.attachShadow({ mode: 'open' });

        var _hash = window.location.hash

        this._talent=[];
        this._class="";

        if(_hash){
            _hash = _hash.substring(1);
            var data = _hash.split("_")

            if (data[0] == "1.0"){
                data[0] = "1.1"
                data[2] = data[2].replace('st', 'a0')
                data[2] = data[2].replace('md', 'g0')
            }

            if( data.length==3 && data[0]==this._version ){
                this._class=data[1];
                this._talent=data[2].split("-").filter(word => word.length == 2);
            }
        }

        var isAssassin = this._class=="assassin"? "selected" : "";
        var isChampion = this._class=="champion" ? "selected" : "";
        var isCleric = this._class=="cleric" ? "selected" : "";
        var isConfessor = this._class=="confessor" ? "selected" : "";
        var isDuelist = this._class=="duelist" ? "selected" : "";
        var isDruid = this._class=="druid" ? "selected" : "";
        var isFrostweaver = this._class=="frostweaver" ? "selected" : "";
        var isKnight = this._class=="knight" ? "selected" : "";
        var isMyrmidon = this._class=="myrmidon" ? "selected" : "";
        var isRanger = this._class=="ranger" ? "selected" : "";
        var isTemplar = this._class=="templar" ? "selected" : "";

        window.location.hash = "toto"

        this.shadowRoot.innerHTML = `
            <style>
                a {
                    color: lightblue
                }

                #parent{
                    position:relative;
                    margin-top:1%;
                }
                #parent img{
                    width:100%
                }
                .classicone{
                    width: 8%;
                    cursor: pointer;
                }
                .classicone.selected{
                    background-color:orange;

                }
                .top {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    z-index: 1;
                }
                .button{
                    z-index: 100;
                    cursor: pointer;
                    //background-color:green;
                }
                #reset{
                    box-shadow:inset 0px 39px 0px -24px #e67a73;
                    background-color:#e4685d;
                    border-radius:10px;
                    border:1px solid #ffffff;
                    display:inline-block;
                    cursor:pointer;
                    color:#ffffff;
                    font-family:Arial;
                    font-size: 2vw;
                    z-index: 100;
                    padding:1% 2%;
                    text-decoration:none;
                    text-shadow:0px 1px 0px #b23e35;
                }
                #reset:hover{
                    background-color:#eb675e;
                }
                #reset:active{
                    position:relative;
                    top:1px;
                }
                #nb-container{
                    bottom : 0;
                    left: 0;
                    font-size:2vw;
                    padding : 1%;
                    position: absolute;
                }
                #class-list{
                    text-align: center;
                }
                .name{
                    font-size: 2vw;
                    padding:1%;
                    top : 0;
                    left: 0;
                    position: absolute;
                }
                #contact{
                    font-size: 0.9vw;
                    float: right;
                    margin-top:1%;
                }
                #parent .desc{
                    position: absolute;
                    top:0;
                    height:100%;
                    width:35%;
                    z-index: 2;
                    display: none;
                }
                #parent #desc-left{
                    left:0
                }
                #parent #desc-right{
                    right:0
                }
                #parent .desc.dis{
                    display: block;
                }
                small{
                    font-size:0.5em
                }

                #a0 {
                    position: absolute;
                    top: 42%;
                    left: 1%;
                    width: 6%;
                    height: 15%;
                }
                #g0 {
                    position: absolute;
                    top: 42%;
                    left: 60%;
                    width: 6%;
                    height: 15%;
                }
                #a1 {
                    position: absolute;
                    top: 25%;
                    left: 9%;
                    width: 6%;
                    height: 15%;
                }
                #a2 {
                    position: absolute;
                    top: 58%;
                    left: 9%;
                    width: 6%;
                    height: 15%;
                }
                #b1 {
                    position: absolute;
                    top: 8%;
                    left: 17%;
                    width: 6%;
                    height: 15%;
                }
                #b2 {
                    position: absolute;
                    top: 41%;
                    left: 17%;
                    width: 6%;
                    height: 15%;
                }
                #b3 {
                    position: absolute;
                    top: 75%;
                    left: 17%;
                    width: 6%;
                    height: 15%;
                }
                #c1 {
                    position: absolute;
                    top: 22%;
                    left: 26%;
                    width: 6%;
                    height: 15%;
                }
                #c2 {
                    position: absolute;
                    top: 42%;
                    left: 26%;
                    width: 6%;
                    height: 15%;
                }
                #c3 {
                    position: absolute;
                    top: 60%;
                    left: 26%;
                    width: 6%;
                    height: 15%;
                }
                #d1 {
                    position: absolute;
                    top: 8%;
                    left: 35%;
                    width: 6%;
                    height: 15%;
                }
                #d2 {
                    position: absolute;
                    top: 42%;
                    left: 35%;
                    width: 6%;
                    height: 15%;
                }
                #d3 {
                    position: absolute;
                    top: 75%;
                    left: 35%;
                    width: 6%;
                    height: 15%;
                }
                #e1 {
                    position: absolute;
                    top: 25%;
                    left: 43%;
                    width: 6%;
                    height: 15%;
                }
                #e2 {
                    position: absolute;
                    top: 42%;
                    left: 43%;
                    width: 6%;
                    height: 15%;
                }
                #e3 {
                    position: absolute;
                    top: 60%;
                    left: 43%;
                    width: 6%;
                    height: 15%;
                }
                #f1 {
                    position: absolute;
                    top: 9%;
                    left: 51%;
                    width: 6%;
                    height: 15%;
                }
                #f2 {
                    position: absolute;
                    top: 75%;
                    left: 51%;
                    width: 6%;
                    height: 15%;
                }
                #g1 {
                    position: absolute;
                    top: 9%;
                    left: 69%;
                    width: 6%;
                    height: 15%;
                }
                #g2 {
                    position: absolute;
                    top: 42%;
                    left: 69%;
                    width: 6%;
                    height: 15%;
                }
                #g3 {
                    position: absolute;
                    top: 76%;
                    left: 69%;
                    width: 6%;
                    height: 15%;
                }
                #h1 {
                    position: absolute;
                    top: 0%;
                    left: 77%;
                    width: 6%;
                    height: 15%;
                }
                #h2 {
                    position: absolute;
                    top: 17%;
                    left: 77%;
                    width: 6%;
                    height: 15%;
                }
                #h3 {
                    position: absolute;
                    top: 33%;
                    left: 77%;
                    width: 6%;
                    height: 15%;
                }
                #h4 {
                    position: absolute;
                    top: 51%;
                    left: 77%;
                    width: 6%;
                    height: 15%;
                }
                #h5 {
                    position: absolute;
                    top: 67%;
                    left: 77%;
                    width: 6%;
                    height: 15%;
                }
                #h6 {
                    position: absolute;
                    top: 84%;
                    left: 77%;
                    width: 6%;
                    height: 15%;
                }
                #i1 {
                    position: absolute;
                    top: 10%;
                    left: 85%;
                    width: 6%;
                    height: 11%;
                }
                #i2 {
                    position: absolute;
                    top: 44%;
                    left: 85%;
                    width: 6%;
                    height: 11%;
                }
                #i3 {
                    position: absolute;
                    top: 78%;
                    left: 85%;
                    width: 6%;
                    height: 11%;
                }
                #j1 {
                    position: absolute;
                    top: 0%;
                    left: 89%;
                    width: 6%;
                    height: 10%;
                }
                #j2 {
                    position: absolute;
                    top: 10%;
                    left: 93%;
                    width: 6%;
                    height: 11%;
                }
                #j3 {
                    position: absolute;
                    top: 21%;
                    left: 89%;
                    width: 6%;
                    height: 10%;
                }
                #j4 {
                    position: absolute;
                    top: 34%;
                    left: 89%;
                    width: 6%;
                    height: 10%;
                }
                #j5 {
                    position: absolute;
                    top: 44%;
                    left: 93%;
                    width: 6%;
                    height: 11%;
                }
                #j6 {
                    position: absolute;
                    top: 55%;
                    left: 89%;
                    width: 6%;
                    height: 10%;
                }
                #j7 {
                    position: absolute;
                    top: 68%;
                    left: 89%;
                    width: 6%;
                    height: 10%;
                }
                #j8 {
                    position: absolute;
                    top: 78%;
                    left: 93%;
                    width: 6%;
                    height: 11%;
                }
                #j9 {
                    position: absolute;
                    top: 89%;
                    left: 89%;
                    width: 6%;
                    height: 10%;
                }
            </style
            <div>
                <div id="class-list">
                    <img class="classicone ${isAssassin}" tag="assassin" src="${domain}/img/assassin/icone.png"/>
                    <img class="classicone ${isChampion}" tag="champion" src="${domain}/img/champion/icone.png"/>
                    <img class="classicone ${isCleric}" tag="cleric" src="${domain}/img/cleric/icone.png"/>
                    <img class="classicone ${isConfessor}" tag="confessor" src="${domain}/img/confessor/icone.png"/>
                    <img class="classicone ${isDruid}" tag="druid" src="${domain}/img/druid/icone.png"/>
                    <img class="classicone ${isDuelist}" tag="duelist" src="${domain}/img/duelist/icone.png"/>
                    <img class="classicone ${isFrostweaver}" tag="frostweaver" src="${domain}/img/frostweaver/icone.png"/>
                    <img class="classicone ${isKnight}" tag="knight" src="${domain}/img/knight/icone.png"/>
                    <img class="classicone ${isMyrmidon}" tag="myrmidon" src="${domain}/img/myrmidon/icone.png"/>
                    <img class="classicone ${isRanger}" tag="ranger" src="${domain}/img/ranger/icone.png"/>
                    <img class="classicone ${isTemplar}" tag="templar" src="${domain}/img/templar/icone.png"/>
                </div>
                <div id="parent">
                    <div id="nb-container"><span id="nb">0</span> / 15</div>
                    <img src="${domain}/img/base.png" />
                    <div class="button" id="a0"></div>
                    <div class="button" id="g0"></div>
                    <div class="button" id="a1"></div>
                    <div class="button" id="a2"></div>
                    <div class="button" id="b1"></div>
                    <div class="button" id="b2"></div>
                    <div class="button" id="b3"></div>
                    <div class="button" id="c1"></div>
                    <div class="button" id="c2"></div>
                    <div class="button" id="c3"></div>
                    <div class="button" id="d1"></div>
                    <div class="button" id="d2"></div>
                    <div class="button" id="d3"></div>
                    <div class="button" id="e1"></div>
                    <div class="button" id="e2"></div>
                    <div class="button" id="e3"></div>
                    <div class="button" id="f1"></div>
                    <div class="button" id="f2"></div>
                    <div class="button" id="g1"></div>
                    <div class="button" id="g2"></div>
                    <div class="button" id="g3"></div>
                    <div class="button" id="h1"></div>
                    <div class="button" id="h2"></div>
                    <div class="button" id="h3"></div>
                    <div class="button" id="h4"></div>
                    <div class="button" id="h5"></div>
                    <div class="button" id="h6"></div>
                    <div class="button" id="i1"></div>
                    <div class="button" id="i2"></div>
                    <div class="button" id="i3"></div>
                    <div class="button" id="j1"></div>
                    <div class="button" id="j2"></div>
                    <div class="button" id="j3"></div>
                    <div class="button" id="j4"></div>
                    <div class="button" id="j5"></div>
                    <div class="button" id="j6"></div>
                    <div class="button" id="j7"></div>
                    <div class="button" id="j8"></div>
                    <div class="button" id="j9"></div>

                    <div id="other"></div>
                    <img id="desc-left" class="desc" />
                    <img id="desc-right"  class="desc" />
                    </div>
                </div>
                <div id="contact" >
                    By Aedius from <a href="https://crowfall.com/en-US/guilds/search?name=cac"> Communauté de l'Arbre Clair</a> |
                    For any bug or improvement : <a href="https://github.com/Aedius/crowfall-talent">Github</a>
                </div>
                <div id="reset">Restart</div>
            <div>
            <div id="recap">
            </div>
        `

        this._other = this.shadowRoot.querySelector("#other");
        this._nb = this.shadowRoot.querySelector("#nb");
        this._desc_left = this.shadowRoot.querySelector("#desc-left");
        this._desc_right = this.shadowRoot.querySelector("#desc-right");
        this._recap = this.shadowRoot.querySelector("#recap");

        var buttonList = this.shadowRoot.querySelectorAll(".button")
        for (var i = 0; i < buttonList.length; i++) {
            buttonList[i].addEventListener('click', this._click.bind(this));
            buttonList[i].addEventListener('mouseenter', this._mouse_enter.bind(this));
            buttonList[i].addEventListener('mouseleave', this._mouse_leave.bind(this));
        }

        this.shadowRoot.querySelector("#reset").addEventListener('click', this._reset.bind(this));

        var iconeList =  this.shadowRoot.querySelectorAll(".classicone")

        for (var i = 0; i < iconeList.length; i++) {
            iconeList[i].addEventListener('click', this._class_change.bind(this));
        }

    }

    connectedCallback() {
        this._display();
    }

    _reset(){
        this._talent = [];
        this._display();
    }

    _class_change(event){

        var newClass = event.target.getAttribute("tag")
        this._class = newClass;

        var iconeList =  this.shadowRoot.querySelectorAll(".classicone")

        for (var i = 0; i < iconeList.length; i++) {
            if (iconeList[i].getAttribute("tag") == newClass){
                iconeList[i].classList.add("selected")
            }else{
                iconeList[i].classList.remove("selected")
            }
        }


        this._display();
    }

    _mouse_enter(event){

        if( this._class == ""){
            return
        }

        const id = event.target.id

        if( id == "c2"){
            return
        }

        if ( id == "a0" || id <= "f2"){
            this._desc_right.src = `${domain}/img/${this._class}/desc/${id}.png`
            this._desc_right.classList.add("dis")
        }else{
            this._desc_left.src = `${domain}/img/${this._class}/desc/${id}.png`
            this._desc_left.classList.add("dis")
        }

    }
    _mouse_leave(event){
        this._desc_right.src = ""
        this._desc_left.src = ""
        this._desc_right.classList.remove("dis")
        this._desc_left.classList.remove("dis")
    }

    _click(event){
        const id = event.target.id
        const i = this._talent.indexOf(id)

        if (i == -1){

            if (this._talent.length >=15) {
                return;
            }

            switch (id) {
                case 'a1':
                case 'a2':
                    if (this._talent.indexOf("a0") == -1){
                        return
                    }
                    break;
                case 'b1':
                    if (this._talent.indexOf("a1") == -1){
                        return
                    }
                    break;
                case 'b2':
                    if (this._talent.indexOf("a1") == -1 && this._talent.indexOf("a2") == -1){
                        return
                    }
                    break;
                case 'b3':
                    if (this._talent.indexOf("a2") == -1){
                        return
                    }
                    break;
                case 'c1':
                    if (this._talent.indexOf("b1") == -1 && this._talent.indexOf("b2") == -1 && this._talent.indexOf("c2") == -1){
                        return
                    }
                    break;
                case 'c2':
                    if (this._talent.indexOf("b2") == -1 && this._talent.indexOf("c1") == -1 && this._talent.indexOf("c3") == -1 ){
                        return
                    }
                    break;
                case 'c3':
                    if (this._talent.indexOf("b2") == -1 && this._talent.indexOf("b3") == -1 && this._talent.indexOf("c2") == -1){
                        return
                    }
                    break;
                case 'd1':
                    if (this._talent.indexOf("b1") == -1){
                        return
                    }
                    break;
                case 'd2':
                    if (this._talent.indexOf("c1") == -1 && this._talent.indexOf("c2") == -1 && this._talent.indexOf("c3") == -1){
                        return
                    }
                    break;
                case 'd3':
                    if (this._talent.indexOf("b3") == -1){
                        return
                    }
                    break;
                case 'e1':
                    if (this._talent.indexOf("c1") == -1 && this._talent.indexOf("d1") == -1){
                        return
                    }
                    break;
                case 'e2':
                    if (this._talent.indexOf("d2") == -1){
                        return
                    }
                    break;
                case 'e3':
                    if (this._talent.indexOf("c3") == -1 && this._talent.indexOf("d3") == -1){
                        return
                    }
                    break;
                case 'f1':
                    if (this._talent.indexOf("e1") == -1){
                        return
                    }
                    break;
                case 'f2':
                    if (this._talent.indexOf("e3") == -1){
                        return
                    }
                    break;
                case 'g0':
                    if (this._talent.indexOf("f1") == -1 && this._talent.indexOf("f2") == -1 && this._talent.indexOf("e1") == -1 && this._talent.indexOf("e2") == -1 && this._talent.indexOf("e3") == -1 ){
                        return
                    }
                    break;
                case 'g1':
                    if (this._talent.indexOf("g2") != -1 || this._talent.indexOf("g3") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("g0") == -1){
                        return
                    }
                    break;
                case 'g2':
                    if (this._talent.indexOf("g1") != -1 || this._talent.indexOf("g3") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("g0") == -1){
                        return
                    }
                    break;
                case 'g3':
                    if (this._talent.indexOf("g1") != -1 || this._talent.indexOf("g2") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("g0") == -1){
                        return
                    }
                    break;
                case 'h1':
                case 'h2':
                    if (this._talent.indexOf("g1") == -1){
                        return
                    }
                    break;
                case 'h3':
                case 'h4':
                    if (this._talent.indexOf("g2") == -1){
                        return
                    }
                    break;
                case 'h5':
                case 'h6':
                    if (this._talent.indexOf("g3") == -1){
                        return
                    }
                    break;
                case 'i1':
                    if (this._talent.indexOf("h1") == -1 && this._talent.indexOf("h2") == -1){
                        return
                    }
                    break;
                case 'i2':
                    if (this._talent.indexOf("h3") == -1 && this._talent.indexOf("h4") == -1){
                        return
                    }
                    break;
                case 'i3':
                    if (this._talent.indexOf("h5") == -1 && this._talent.indexOf("h6") == -1){
                        return
                    }
                    break;
                case 'j1':
                    if (this._talent.indexOf("j2") != -1 || this._talent.indexOf("j3") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i1") == -1){
                        return
                    }
                    break;
                case 'j2':
                    if (this._talent.indexOf("j1") != -1 || this._talent.indexOf("j3") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i1") == -1){
                        return
                    }
                    break;
                case 'j3':
                    if (this._talent.indexOf("j1") != -1 || this._talent.indexOf("j2") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i1") == -1){
                        return
                    }
                    break;
                case 'j4':
                    if (this._talent.indexOf("j5") != -1 || this._talent.indexOf("j6") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i2") == -1){
                        return
                    }
                    break;
                case 'j5':
                    if (this._talent.indexOf("j4") != -1 || this._talent.indexOf("j6") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i2") == -1){
                        return
                    }
                    break;
                case 'j6':
                    if (this._talent.indexOf("j4") != -1 || this._talent.indexOf("j5") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i2") == -1){
                        return
                    }
                    break;
                case 'j7':
                    if (this._talent.indexOf("j8") != -1 || this._talent.indexOf("j9") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i3") == -1){
                        return
                    }
                    break;
                case 'j8':
                    if (this._talent.indexOf("j7") != -1 || this._talent.indexOf("j9") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i3") == -1){
                        return
                    }
                    break;
                case 'j9':
                    if (this._talent.indexOf("j7") != -1 || this._talent.indexOf("j8") != -1 ){
                        return
                    }
                    if (this._talent.indexOf("i3") == -1){
                        return
                    }
                    break;
            }

            this._talent.push(id)
        }else{
            switch (id) {
                case 'a0':
                    if (this._talent.length != 1){
                        return
                    }
                    break;
                case 'a1':
                    if (this._talent.indexOf("b1") != -1){
                        return
                    }
                    if( this._talent.indexOf("b2") != -1 && this._talent.indexOf("a2") == -1){
                        return
                    }
                    break;
                case 'a2':
                    if (this._talent.indexOf("b3") != -1){
                        return
                    }
                    if( this._talent.indexOf("b2") != -1 && this._talent.indexOf("a1") == -1){
                        return
                    }
                    break;
                case 'b1':
                    if (this._talent.indexOf("d1") != -1){
                        return
                    }
                    if( this._talent.indexOf("c1") != -1 && this._talent.indexOf("b2") == -1){
                        return
                    }
                    break;
                case 'b2':
                    if (this._talent.indexOf("c2") != -1){
                        return
                    }
                    if( this._talent.indexOf("c1") != -1 && this._talent.indexOf("b1") == -1){
                        return
                    }
                    if( this._talent.indexOf("c3") != -1 && this._talent.indexOf("b3") == -1){
                        return
                    }
                    break;
                case 'b3':
                    if (this._talent.indexOf("d3") != -1){
                        return
                    }
                    if( this._talent.indexOf("c3") != -1 && this._talent.indexOf("b2") == -1){
                        return
                    }
                    break;
                case 'c1':
                    if (this._talent.indexOf("e1") != -1  &&  this._talent.indexOf("d1") == -1){
                        return
                    }
                    if( this._talent.indexOf("d2") != -1 && this._talent.indexOf("c2") == -1 && this._talent.indexOf("c3") == -1){
                        return
                    }
                    break;
                case 'c2':
                    if (this._talent.indexOf("d2") != -1 && this._talent.indexOf("c1") == -1 && this._talent.indexOf("c3") == -1){
                        return
                    }
                    if (this._talent.indexOf("c1") != -1 && this._talent.indexOf("b1") == -1 && this._talent.indexOf("b2") == -1 ){
                        return
                    }
                    if (this._talent.indexOf("c3") != -1 && this._talent.indexOf("b2") == -1 && this._talent.indexOf("b3") == -1 ){
                        return
                    }
                    break;
                case 'c3':
                    if (this._talent.indexOf("e3") != -1 &&  this._talent.indexOf("d3") == -1){
                        return
                    }
                    if (this._talent.indexOf("d2") != -1 && this._talent.indexOf("c1") == -1 && this._talent.indexOf("c2") == -1){
                        return
                    }
                    break;
                case 'd1':
                    if (this._talent.indexOf("e1") != -1 && this._talent.indexOf("c1") == -1){
                        return
                    }
                    break;
                case 'd2':
                    if (this._talent.indexOf("e2") != -1){
                        return
                    }
                    break;
                case 'd3':
                    if (this._talent.indexOf("e3") != -1 && this._talent.indexOf("c3") == -1){
                        return
                    }
                    break;
                case 'e1':
                    if (this._talent.indexOf("f1") != -1){
                        return
                    }
                    if (this._talent.indexOf("g0") != -1 && this._talent.indexOf("e2") == -1 && this._talent.indexOf("e3") == -1 ){
                        return
                    }
                    break;
                case 'e2':
                    if (this._talent.indexOf("g0") != -1 && this._talent.indexOf("e1") == -1 && this._talent.indexOf("e2") == -1){
                        return
                    }
                    break;
                case 'e3':
                    if (this._talent.indexOf("f2") != -1){
                        return
                    }
                    if (this._talent.indexOf("g0") != -1 && this._talent.indexOf("e1") == -1 && this._talent.indexOf("e2") == -1){
                        return
                    }
                    break;
                case 'g0':
                    if (this._talent.indexOf("g1") != -1 || this._talent.indexOf("g2") != -1 || this._talent.indexOf("g3") != -1){
                        return
                    }
                    break;
                case 'g1':
                    if (this._talent.indexOf("h1") != -1 || this._talent.indexOf("h2") != -1){
                        return
                    }
                    break;
                case 'g2':
                    if (this._talent.indexOf("h3") != -1 || this._talent.indexOf("h4") != -1){
                        return
                    }
                    break;
                case 'g3':
                    if (this._talent.indexOf("h5") != -1 || this._talent.indexOf("h6") != -1){
                        return
                    }
                    break;
                case 'h1':
                    if (this._talent.indexOf("i1") != -1 && this._talent.indexOf("h2") == -1){
                        return
                    }
                    break;
                case 'h2':
                    if (this._talent.indexOf("i1") != -1 && this._talent.indexOf("h1") == -1){
                        return
                    }
                    break;
                case 'h3':
                    if (this._talent.indexOf("i2") != -1 && this._talent.indexOf("h4") == -1){
                        return
                    }
                    break;
                case 'h4':
                    if (this._talent.indexOf("i2") != -1 && this._talent.indexOf("h5") == -1){
                        return
                    }
                    break;
                case 'h5':
                    if (this._talent.indexOf("i3") != -1 && this._talent.indexOf("h6") == -1){
                        return
                    }
                    break;
                case 'h6':
                    if (this._talent.indexOf("i3") != -1 && this._talent.indexOf("h5") == -1){
                        return
                    }
                    break;
                case 'i1':
                    if (this._talent.indexOf("j1") != -1 || this._talent.indexOf("j2") != -1 || this._talent.indexOf("j3") != -1 ){
                        return
                    }
                    break;
                case 'i2':
                    if (this._talent.indexOf("j4") != -1 || this._talent.indexOf("j5") != -1 || this._talent.indexOf("j6") != -1 ){
                        return
                    }
                    break;
                case 'i3':
                    if (this._talent.indexOf("j7") != -1 || this._talent.indexOf("j8") != -1 || this._talent.indexOf("j9") != -1 ){
                        return
                    }
                    break;

            }

            this._talent.splice(i, 1)
        }

        this._display()
    }

    _display(){

        const imgList = this._talent.map( code => {
            return `<img class="top" src="${domain}/img/${code}.png" />`
        })

        var classImg = ""
        if (this._class != ""){
            var name = this._class.charAt(0).toUpperCase() + this._class.slice(1);
            const c = this._class
            if (lastUpdate[c]){
                name = `${name} <sup><small>( updated : ${lastUpdate[c]} )</small></sup>`
            }
            classImg = `<img  class="top" src="${domain}/img/${this._class}/talent.png" />
                <div class="name">${name}</div>`
        }

        this._other.innerHTML = imgList.join('') + classImg;
        this._nb.innerHTML = imgList.length;

        this._talent.sort()

        const recapList = this._talent.map( code => {
            if (code == "c2" || this._class == "") {
                return;
            }
            return `<img src="${domain}/img/${this._class}/desc/${code}.png" />`
        })

        this._recap.innerHTML= recapList.join('')

        window.location.hash = this._version +"_"+ this._class +"_"+ this._talent.join("-")
        

    }

}
customElements.define('cac-talent-container', TalentContainer);

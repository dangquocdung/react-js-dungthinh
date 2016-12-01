function getName(name){
  alert(name);
}

var KhoaPham = React.createClass({
  themHocVien(){
    this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;

    this.setState(this.state);
  },
  layThongTin:function(){
    alert(this.props.children);
  },
  getInitialState(){
    return {tongHocVien: this.props.tongHocVien};
  },
  render: function(){
    return(
      <div>
        <h1 className="mauvang"> {this.props.ten} - {this.props.giangvien} </h1>
        <div>So hoc vien: {this.state.tongHocVien} </div>
        <p>{this.props.children}</p>
        <button onClick={()=>{var str=this.props.ten + ' ' + this.props.giangvien; getName(str)}}>Thong tin</button>
        <button onClick={this.themHocVien}>Them hoc vien</button>
        <KhoaHoc />
      </div>


    );
  }
});

var KhoaHoc = React.createClass({
  render: function(){
    return(

      <h3> Lap trinh ReactJS </h3>


    );
  }
});

var InputTag = React.createClass({
  show(){
    var text = this.refs.sl.value;
    alert(text);
  },
  render: function(){
    return(
      <div>
        <select ref="sl">
          <option value="a">AAA</option>
          <option value="b">BBB</option>
          <option value="c">CCC</option>
        </select>
        <input type="text" ref="txt"/>
        <button onClick={this.show}>Hien thi</button>
      </div>
    );
  }
});
ReactDOM.render(

  <div>
    <InputTag />
    <KhoaPham ten="NodeJS" giangvien="Mr.Khoa" tongHocVien="10"> Mon hoc NodeJS </KhoaPham>
    <KhoaPham ten="ReactJS" giangvien="Mr.Pho" tongHocVien="20"> Mon hoc ReactJS </KhoaPham>

  </div>

  , document.getElementById("root")
);

import { Component } from "react";

class StudentInfo extends Component {
  render() {
    return student.map((student) => (
      <tr>
        <td>{this.props.student.id}</td>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.address}</td>
      </tr>
    ));
  }
}

export default StudentInfo;

// dữ liệu để trong component hay để ngoài
// làm thể nào để đưa dữ liệu vào commpoent để dùng

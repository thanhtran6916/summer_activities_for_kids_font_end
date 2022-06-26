export interface Student {
  id?: number;

  name?: string;

  dharmaName?: string; // pháp danh

  registerForRefuge?: string; // Đăng ký quy y

  gender?: string;

  yearBirth?: Date;

  height?: number;

  weight?: number;

  relativeName?: string; // họ tên người thân

  relativePhone?: string; // số điện thoại người thân

  appartmentNumber?: string; // số nhà

  ward?: string; // phường/xã

  district?: string; // quận/huyện

  province?: string; // tỉnh/thành phố

  address?: string; // địa chỉ nơi ở hiện tại

  numberOfParticipation?: number; // số lần đã tham gia

  healthCondition?: string; // tình trạng sức khỏe

  noteHealthCondition?: string; // ghi chú tình trạng sức khỏe

  conduct?: string; // hạnh kiểm

  academicAability?: string; // học lực

  summerCourseId?: number;

  introducePerson?: string; // người giới thiệu

  introducePersonPhone?: string; // số điện thoại người giới thiệu

  introducePersonIsYouth?: string; // người giới thiệu đang sinh hoạt ở trong chúng thanh niên

  activeGroupName?: string; // tên tổ người giới thiệu đang sinh hoạt

  result?: string; // Đủ điều kiện hay không

  status?: string; // Trạng thái

  reasonReject?: string; // lý do từ chối

  createdDate?: Date;

  createdBy?: Date;
}

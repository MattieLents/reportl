import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import LoginReducer from './login_reducer';
import UserForm from './addUser_reducer';
import ClassMaker from './class_reducer';
import GetClasses from './get_classes_reducer';
import GetUsers from './get_users_reducer';
import UpdateProfile from './profile_reducer';
import GetProfile from './view_profile_reducer';
import GetForms from './classforms_reducer';
import GetClassId from './add_classid_reducer';
import UpdateClassInfo from './update_class_reducer';
import GetStudents from './get_students_reducer';
import GetTeachers from './get_teachers_reducer';
import GetDepartments from './view_departments_reducer';
import UploadFile from './post_file_reducer';
import GetGradeData from './grade_data_reducer';
import GetAttendees from './get_attendees_reducer';
import DepartmentForm from './addDepartment_reducer';
import GetCourseClasses from './view_course_classes_reducer';
import CourseForm from './addCourse_reducer';
import CalendarData from './add_calendar_reducer';
import StudentClassPair from './add_student_to_class_reducer';
import ModuleMaker from './add_module_to_class';
import SelectedClassInformation from './get_classes_by_id';
import AllCourses from './get_all_courses_reducer';
import SearchCalendar from './search_calendar_reducer';
import Meeting from './get_meeting_reducer';
import SelectedClassGraph from './selected_class_graph_reducer';
import SelectedUserGraph from './selected_user_graph_reducer';
import GetUser from './get_user_reducer';

const rootReducer = combineReducers({
  user: LoginReducer,
  form: formReducer,
  addUser: UserForm,
  classes: ClassMaker,
  allClasses: GetClasses,
  allUsers: GetUsers,
  allStudents: GetStudents,
  allTeachers: GetTeachers,
  updateProfile: UpdateProfile,
  profile: GetProfile,
  selectedForm: GetForms,
  classId: GetClassId,
  classInfo: UpdateClassInfo,
  departments: GetDepartments,
  uploadedFile: UploadFile,
  gradeData: GetGradeData,
  attendees: GetAttendees,
  addDepartment: DepartmentForm,
  course: GetCourseClasses,
  addCourse: CourseForm,
  calendarData: CalendarData,
  studentClassPair: StudentClassPair,
  addedModule: ModuleMaker,
  selectedClass: SelectedClassInformation,
  allCourses: AllCourses,
  calendarSearchResult: SearchCalendar,
  meeting: Meeting,
  selectedClassGraph: SelectedClassGraph,
  selectedUserGraph: SelectedUserGraph,
  getUser: GetUser,
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(promise, logger));

export { rootReducer, store };


import { actions as appActions } from "./application.actions";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  task: [
    { id: uuidv4(), title: "Книга", description: "Прочитати 20 стр. в день", status: 'done' },
    { id: uuidv4(), title: "Робота", description: "Поїхати на семінар", status: "cancel" },
    { id: uuidv4(), title: "Відпочинок", description: "Забронювати готель", status: 'progress' },
  ],
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {

    case appActions.addTaskSuccessful.type: {
      return {
        ...state,
        task: [...state.task, { id: uuidv4(), ...action.payload }],
      };
    }

    case appActions.deleteTaskSuccessful.type: {
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload),
      };
    }

    case appActions.updateSuccessful.type: {
      return {
        ...state,
        task: state.task.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};
export default applicationReducer;

import tasksData from "@/services/mockData/tasks.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const taskService = {
  async getAll() {
    await delay(400);
    return [...tasksData];
  },

  async getById(id) {
    await delay(200);
    const task = tasksData.find(task => task.Id === parseInt(id));
    if (!task) {
      throw new Error("Task not found");
    }
    return { ...task };
  },

  async getByCategory(category) {
    await delay(350);
    return tasksData.filter(task => 
      task.category.toLowerCase() === category.toLowerCase()
    );
  },

  async getByStatus(status) {
    await delay(300);
    return tasksData.filter(task => 
      task.status.toLowerCase() === status.toLowerCase()
    );
  },

  async create(task) {
    await delay(300);
    const maxId = Math.max(...tasksData.map(t => t.Id));
    const newTask = {
      ...task,
      Id: maxId + 1
    };
    tasksData.push(newTask);
    return { ...newTask };
  },

  async update(id, updates) {
    await delay(300);
    const index = tasksData.findIndex(task => task.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Task not found");
    }
    tasksData[index] = { ...tasksData[index], ...updates };
    return { ...tasksData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = tasksData.findIndex(task => task.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Task not found");
    }
    const deletedTask = { ...tasksData[index] };
    tasksData.splice(index, 1);
    return deletedTask;
  }
};
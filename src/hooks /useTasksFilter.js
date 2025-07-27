import {useMemo} from 'react';

export const useTasksFilterSort = (tasks, sort) => {
    const sortedTasks = useMemo(()=>{
        if (sort){
            return [...tasks].sort((a,b) => a[sort].localeCompare(b[sort]));
        }
        return tasks;
    }, [sort, tasks]);
    return sortedTasks;
}

export const useTasksFilter = (tasks, field, query) => {
    const sortedTasks = useTasksFilterSort(tasks, field);

    const result = useMemo(() => {
        if (!query) return sortedTasks;

        const q = query.toLowerCase();

        return sortedTasks.filter(task => {
            switch (field) {
                case 'description':
                    return task.description?.toLowerCase().includes(q);
                case 'title':
                    return task.title.toLowerCase().includes(q);
                case 'isDone':
                    return  task.isDone === (q === 'true');
                default:
                    return (
                        task.title.toLowerCase().includes(q) ||
                        task.description?.toLowerCase().includes(q)
                    );
            }
        });
    }, [sortedTasks, field, query]);

    return result;
};
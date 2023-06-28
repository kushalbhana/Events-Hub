import { ProjectDeleteConfirmationForm } from "@/components/project-delete";
import ProjectNotFoundPage from "@/components/project-not-found";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { UpdateProjectForm } from "@/components/update-project";
import { service } from "@/service";

type ProjectSettingsPageProps = {
	params: { id: string };
};

export default async function ProjectSettingsPage({
	params,
}: ProjectSettingsPageProps) {
	const project = await service.project.getOne(params.id);

	if (!project) return <ProjectNotFoundPage />;

	return (
		<>
			<div className="mb-4">
				<Title className="text-3xl">Settings</Title>
				<p className="text-muted-foreground">
					Manage Project & Member Settings
				</p>
			</div>
			<Card className="shadow mb-2">
				<CardHeader>
					<CardTitle>Update Project</CardTitle>
					<CardDescription>
						Update the project details, these details will show up on the ID
						Card also.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<UpdateProjectForm project={project} />
				</CardContent>
			</Card>
			<Card className="shadow">
				<CardHeader>
					<CardTitle>Danger Zone</CardTitle>
					<CardDescription>
						This will permenentely delete the project and all the members in it.
						The ID Card from this project will no longer be valid.{" "}
						<span className="font-semibold">This action is irreversible.</span>
					</CardDescription>
				</CardHeader>
				<CardFooter className="justify-end">
					<ProjectDeleteConfirmationForm project={project} />
				</CardFooter>
			</Card>
		</>
	);
}
